// AI Service for content editing and generation
import { openai } from '@ai-sdk/openai';
import { anthropic } from '@ai-sdk/anthropic';
import { generateText } from 'ai';

// Predefined prompts for different content types
export const CONTENT_PROMPTS = {
  pitch_slide: "Refine this pitch slide content for investors. Make it compelling, concise, and professional. Maintain the structure but improve clarity and impact:",
  market_analysis: "Update and improve this market analysis content. Ensure statistics are realistic, language is professional, and the analysis is thorough:",
  technical_specs: "Improve this technical specification content. Make it clear, accurate, and comprehensive for technical audiences:",
  business_model: "Enhance this business model description. Make it investor-ready with clear value propositions and revenue streams:",
  team_description: "Refine this team description to highlight relevant experience and credibility for investors:",
  financial_projections: "Improve these financial projections. Ensure they are realistic, well-structured, and investor-appropriate:",
  general: "Improve the following content while maintaining its original purpose and structure:"
};

class AIService {
  constructor() {
    this.provider = process.env.AI_PROVIDER || 'openai';
  }

  async editContent(content, promptType = 'general', customPrompt = null) {
    try {
      const prompt = customPrompt || CONTENT_PROMPTS[promptType] || CONTENT_PROMPTS.general;
      const fullPrompt = `${prompt}\n\n${content}`;

      const model = this.provider === 'anthropic' 
        ? anthropic('claude-3-sonnet-20240229')
        : openai('gpt-4-turbo-preview');

      const { text } = await generateText({
        model,
        prompt: fullPrompt,
        maxTokens: 2000,
        temperature: 0.7,
      });

      return {
        success: true,
        content: text,
        provider: this.provider
      };
    } catch (error) {
      console.error('AI Service Error:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  async generateContent(topic, contentType = 'general') {
    try {
      const prompts = {
        pitch_slide: `Create a compelling investor pitch slide about: ${topic}. Structure it with a clear headline, 2-3 key points, and actionable insights.`,
        market_analysis: `Generate a comprehensive market analysis for: ${topic}. Include market size, trends, competitive landscape, and opportunities.`,
        business_model: `Create a detailed business model description for: ${topic}. Include value proposition, revenue streams, and key partnerships.`,
        general: `Generate professional content about: ${topic}. Make it informative, well-structured, and appropriate for business audiences.`
      };

      const prompt = prompts[contentType] || prompts.general;

      const model = this.provider === 'anthropic' 
        ? anthropic('claude-3-sonnet-20240229')
        : openai('gpt-4-turbo-preview');

      const { text } = await generateText({
        model,
        prompt,
        maxTokens: 1500,
        temperature: 0.8,
      });

      return {
        success: true,
        content: text,
        provider: this.provider
      };
    } catch (error) {
      console.error('AI Generation Error:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  async improveForAudience(content, audience = 'investors') {
    const audiencePrompts = {
      investors: "Rewrite this content to be more compelling for investors. Focus on market opportunity, scalability, and ROI potential:",
      technical: "Rewrite this content for a technical audience. Include relevant technical details and implementation considerations:",
      general: "Rewrite this content for a general business audience. Make it clear, professional, and engaging:",
      customers: "Rewrite this content from a customer perspective. Focus on benefits, value proposition, and user experience:"
    };

    return this.editContent(content, 'general', audiencePrompts[audience] || audiencePrompts.general);
  }
}

export default new AIService();
