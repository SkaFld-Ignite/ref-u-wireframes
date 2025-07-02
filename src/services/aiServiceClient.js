// Client-side AI Service for Docusaurus
class AIServiceClient {
  constructor() {
    this.apiKey = null;
    this.provider = 'openai'; // default
  }

  setApiKey(apiKey, provider = 'openai') {
    this.apiKey = apiKey;
    this.provider = provider;
  }

  async editContent(content, promptType = 'general', customPrompt = null) {
    if (!this.apiKey) {
      throw new Error('API key not set. Please configure your AI provider API key.');
    }

    const prompts = {
      pitch_slide: "Refine this pitch slide content for investors. Make it compelling, concise, and professional. Maintain the structure but improve clarity and impact:",
      market_analysis: "Update and improve this market analysis content. Ensure statistics are realistic, language is professional, and the analysis is thorough:",
      technical_specs: "Improve this technical specification content. Make it clear, accurate, and comprehensive for technical audiences:",
      business_model: "Enhance this business model description. Make it investor-ready with clear value propositions and revenue streams:",
      team_description: "Refine this team description to highlight relevant experience and credibility for investors:",
      financial_projections: "Improve these financial projections. Ensure they are realistic, well-structured, and investor-appropriate:",
      general: "Improve the following content while maintaining its original purpose and structure:"
    };

    try {
      const prompt = customPrompt || prompts[promptType] || prompts.general;
      const fullPrompt = `${prompt}\n\n${content}`;

      if (this.provider === 'openai') {
        return await this.callOpenAI(fullPrompt);
      } else if (this.provider === 'anthropic') {
        return await this.callAnthropic(fullPrompt);
      } else {
        throw new Error('Unsupported AI provider');
      }
    } catch (error) {
      console.error('AI Service Error:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  async callOpenAI(prompt) {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4-turbo-preview',
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 2000,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || 'OpenAI API request failed');
    }

    const data = await response.json();
    return {
      success: true,
      content: data.choices[0].message.content,
      provider: 'openai'
    };
  }

  async callAnthropic(prompt) {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': this.apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-3-sonnet-20240229',
        max_tokens: 2000,
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || 'Anthropic API request failed');
    }

    const data = await response.json();
    return {
      success: true,
      content: data.content[0].text,
      provider: 'anthropic'
    };
  }

  async generateContent(topic, contentType = 'general') {
    const prompts = {
      pitch_slide: `Create a compelling investor pitch slide about: ${topic}. Structure it with a clear headline, 2-3 key points, and actionable insights.`,
      market_analysis: `Generate a comprehensive market analysis for: ${topic}. Include market size, trends, competitive landscape, and opportunities.`,
      business_model: `Create a detailed business model description for: ${topic}. Include value proposition, revenue streams, and key partnerships.`,
      general: `Generate professional content about: ${topic}. Make it informative, well-structured, and appropriate for business audiences.`
    };

    const prompt = prompts[contentType] || prompts.general;
    
    if (this.provider === 'openai') {
      return await this.callOpenAI(prompt);
    } else if (this.provider === 'anthropic') {
      return await this.callAnthropic(prompt);
    }
  }

  async improveForAudience(content, audience = 'investors') {
    const audiencePrompts = {
      investors: "Rewrite this content to be more compelling for investors. Focus on market opportunity, scalability, and ROI potential:",
      technical: "Rewrite this content for a technical audience. Include relevant technical details and implementation considerations:",
      general: "Rewrite this content for a general business audience. Make it clear, professional, and engaging:",
      customers: "Rewrite this content from a customer perspective. Focus on benefits, value proposition, and user experience:"
    };

    const prompt = audiencePrompts[audience] || audiencePrompts.general;
    return this.editContent(content, 'general', prompt);
  }
}

export default new AIServiceClient();
