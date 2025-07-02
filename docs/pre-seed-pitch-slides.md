---
sidebar_position: 4
title: Pre-Seed Pitch Slides
description: Interactive 16:9 presentation slides for $1-2M pre-seed funding round
---

# 🎯 Ref-U Pre-Seed Pitch Presentation

*Professional 16:9 slide deck optimized for pre-seed investor presentations*

<div style={{background: '#e0f2fe', border: '2px solid #0277bd', borderRadius: '8px', padding: '1rem', margin: '1rem 0', fontSize: '0.9rem', color: '#01579b'}}>
<strong>🚨 CURRENT STATUS:</strong> Pre-Beta Development - MVP 85% complete, targeting Q1 2025 beta launch with 1K initial users. All metrics represent industry-backed projections.
</div>

<style>{`
/* === PRESENTATION CORE STYLES === */
.slide-container {
  width: 100%;
  max-width: 1280px;
  height: 720px;
  margin: 20px auto;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  font-family: 'Helvetica Neue', 'Arial', sans-serif;
  display: flex;
  flex-direction: column;
}

.slide-content {
  padding: 40px 50px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  flex: 1;
}

/* === TYPOGRAPHY SYSTEM === */
.slide-title {
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.1;
  color: #1a202c;
}

.slide-subtitle {
  font-size: 1.4rem;
  opacity: 0.8;
  margin-bottom: 1.5rem;
  font-weight: 400;
}

.big-number {
  font-size: 4.5rem;
  font-weight: 900;
  text-align: center;
  margin: 0.8rem 0;
  line-height: 1;
}

.highlight-text {
  background: #2563EB;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  font-weight: 600;
  display: inline-block;
  font-size: 1.1rem;
}

/* === LAYOUT SYSTEMS === */
.two-column {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: start;
  flex: 1;
}

.three-column {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 2rem 0;
}

.four-column {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  text-align: center;
  margin: 1.5rem 0;
}

.centered-content {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

/* === COMPONENT STYLES === */
.key-point {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  margin: 0.8rem 0;
  border-left: 5px solid #2563EB;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
}

.key-point h3 {
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 0.6rem;
  color: #1a202c;
}

.key-point p {
  font-size: 1rem;
  color: #4a5568;
  line-height: 1.5;
  margin: 0;
}

.market-card {
  background: white;
  padding: 1.8rem;
  border-radius: 14px;
  text-align: center;
  border: 2px solid #e2e8f0;
  transition: all 0.3s ease;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 200px;
}

.market-card:hover {
  border-color: #2563EB;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.12);
}

.market-card h3 {
  font-size: 0.9rem;
  margin-bottom: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #6b7280;
  line-height: 1.3;
}

.market-card .market-value {
  font-size: 2.5rem;
  font-weight: 900;
  margin: 1rem 0;
  color: #2563EB;
}

.market-card .market-value.sam {
  color: #059669;
}

.market-card .market-value.som {
  color: #ea580c;
}

.market-card p {
  font-size: 0.85rem;
  color: #4a5568;
  margin: 0;
  line-height: 1.4;
  flex-grow: 1;
  display: flex;
  align-items: center;
  text-align: center;
}

.metric-card {
  background: white;
  padding: 1.5rem;
  border-radius: 14px;
  text-align: center;
  border: 2px solid #e2e8f0;
  transition: all 0.3s ease;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.06);
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.metric-card:hover {
  border-color: #2563EB;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.12);
}

.metric-card h3 {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.metric-card .metric-value {
  font-size: 2rem;
  font-weight: 800;
  margin: 0.5rem 0;
}

.metric-card p {
  font-size: 0.9rem;
  color: #4a5568;
  margin: 0;
}

/* === THEME VARIATIONS === */
.slide-cover {
  background: linear-gradient(135deg, #1e40af 0%, #2563EB 50%, #3b82f6 100%);
  color: white;
}

.slide-cover .slide-title {
  color: white;
}

.slide-problem {
  background: linear-gradient(135deg, #fefefe 0%, #f8f9fa 100%);
  border-left: 8px solid #dc2626;
}

.slide-problem .key-point {
  border-left-color: #dc2626;
}

.slide-problem .key-point h3 {
  color: #dc2626;
}

.slide-solution {
  background: linear-gradient(135deg, #fefefe 0%, #f8f9fa 100%);
  border-left: 8px solid #059669;
}

.slide-solution .key-point {
  border-left-color: #059669;
}

.slide-solution .key-point h3 {
  color: #059669;
}

.slide-market {
  background: linear-gradient(135deg, #fefefe 0%, #f8f9fa 100%);
  border-left: 8px solid #2563EB;
}

.slide-market .key-point {
  border-left-color: #2563EB;
}

.slide-team {
  background: linear-gradient(135deg, #fefefe 0%, #f8f9fa 100%);
  border-left: 8px solid #7c3aed;
}

.slide-team .key-point {
  border-left-color: #7c3aed;
}

.slide-team .key-point h3 {
  color: #7c3aed;
}

/* === CONTENT SCALING === */
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 0;
}

.bottom-highlight {
  margin-top: 1.5rem;
  flex-shrink: 0;
}

/* === RESPONSIVE DESIGN === */
@media (max-width: 1200px) {
  .slide-container {
    height: 600px;
    margin: 15px auto;
  }
  
  .slide-content {
    padding: 35px 40px;
  }
  
  .slide-title {
    font-size: 2.2rem;
  }
  
  .big-number {
    font-size: 3.8rem;
  }
  
  .market-card .market-value {
    font-size: 2.2rem;
  }
  
  .market-card {
    min-height: 180px;
  }
}

@media (max-width: 1024px) {
  .slide-container {
    height: 520px;
    margin: 10px auto;
  }
  
  .slide-content {
    padding: 30px 35px;
  }
  
  .slide-title {
    font-size: 1.9rem;
  }
  
  .big-number {
    font-size: 3.2rem;
  }
  
  .two-column {
    gap: 1.5rem;
  }
  
  .three-column {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .key-point {
    padding: 1.2rem;
    margin: 0.6rem 0;
  }
  
  .key-point h3 {
    font-size: 1rem;
  }
  
  .key-point p {
    font-size: 0.9rem;
  }
  
  .metric-card {
    height: 120px;
    padding: 1.2rem;
  }
  
  .metric-card .metric-value {
    font-size: 1.7rem;
  }
  
  .market-card {
    min-height: 150px;
    padding: 1.5rem;
  }
  
  .market-card .market-value {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .slide-container {
    height: auto;
    min-height: 450px;
  }
  
  .slide-content {
    padding: 20px 25px;
  }
  
  .slide-title {
    font-size: 1.6rem;
  }
  
  .big-number {
    font-size: 2.8rem;
  }
  
  .two-column {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .four-column {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .metric-card {
    height: 100px;
  }
  
  .metric-card .metric-value {
    font-size: 1.4rem;
  }
  
  .market-card {
    min-height: 130px;
    padding: 1.2rem;
  }
  
  .market-card .market-value {
    font-size: 1.8rem;
  }
}
`}</style>

---

## Slide 1: Cover/Purpose 🚀

<div className="slide-container slide-cover">
  <div className="slide-content centered-content">
    <div>
      <h1 className="slide-title" style={{fontSize: '3.5rem', marginBottom: '1rem'}}>
        REF-U
      </h1>
      <p className="slide-subtitle" style={{fontSize: '1.6rem', color: '#e2e8f0', marginBottom: '2rem'}}>
        The Future of Sports Fan Engagement
      </p>
      <h2 style={{color: 'white', fontSize: '1.8rem', margin: '1.5rem 0'}}>
        Pre-Seed Funding Presentation
      </h2>
    </div>
    
    <div>
      <div className="highlight-text" style={{fontSize: '1.2rem', margin: '2rem auto', maxWidth: '550px', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)'}}>
        Seeking $1.5M to build MVP and launch Q1 2025 beta
      </div>
      <p style={{fontSize: '1.1rem', marginTop: '1.5rem', color: '#e2e8f0'}}>
        Julian R. Geiger, CEO & Founder<br/>
        contact@ref-u.com | ref-u.com
      </p>
    </div>
  </div>
</div>

---

## Slide 2: The Problem 🔥

<div className="slide-container slide-problem">
  <div className="slide-content">
    <div>
      <h1 className="slide-title">
        Sports fans are frustrated and disconnected
      </h1>
    </div>
    
    <div className="main-content">
      <div className="two-column">
        <div>
          <div className="key-point">
            <h3>
              78% of sports fans disagree with referee calls
            </h3>
            <p>
              But they don't understand the rules behind the calls
            </p>
          </div>
          
          <div className="key-point">
            <h3>
              65% of sports discussions focus on controversial calls
            </h3>
            <p>
              Fan frustration drives disengagement from traditional sports media
            </p>
          </div>
        </div>
        
        <div>
          <div className="key-point">
            <h3>
              Gen Z fans seek interactive experiences
            </h3>
            <p>
              Traditional sports media doesn't meet their engagement expectations
            </p>
          </div>
          
          <div className="key-point">
            <h3>
              No platform combines education with real-time analysis
            </h3>
            <p>
              Fans want to learn, not just argue about referee decisions
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

---

## Slide 3: Our Solution 💡

<div className="slide-container slide-solution">
  <div className="slide-content">
    <div>
      <h1 className="slide-title">
        The first platform combining real-time referee analysis with educational content
      </h1>
    </div>
    
    <div className="main-content">
      <div className="two-column">
        <div>
          <div className="key-point">
            <h3>🏀 Live Game Integration</h3>
            <p>
              Real-time referee call analysis during live games
            </p>
          </div>
          
          <div className="key-point">
            <h3>📚 Educational Platform</h3>
            <p>
              Learn rules through interactive gameplay and expert explanations
            </p>
          </div>
          
          <div className="key-point">
            <h3>👥 Community Learning</h3>
            <p>
              Moderated discussions focused on understanding, not arguing
            </p>
          </div>
        </div>
        
        <div>
          <div className="key-point">
            <h3>🎮 Gamification System</h3>
            <p>
              XP, levels, and rewards for learning and participation
            </p>
          </div>
          
          <div className="key-point">
            <h3>📱 Mobile-First Design</h3>
            <p>
              Built for the next generation of sports fans
            </p>
          </div>
          
          <div className="key-point">
            <h3>💰 Multiple Revenue Streams</h3>
            <p>
              Premium features, merchandise, creator tools
            </p>
          </div>
        </div>
      </div>
    </div>
    
    <div className="bottom-highlight">
      <div className="highlight-text" style={{textAlign: 'center', width: '100%'}}>
        Turn fan frustration into fan education and engagement
      </div>
    </div>
  </div>
</div>

---

## Slide 4: Why Now? ⏰

<div className="slide-container">
  <div className="slide-content" style={{background: 'linear-gradient(135deg, #fefefe 0%, #f8f9fa 100%)'}}>
    <div>
      <h1 className="slide-title">
        Perfect timing for sports fan engagement revolution
      </h1>
    </div>
    
    <div className="main-content">
      <div style={{textAlign: 'center', margin: '1.5rem 0'}}>
        <div className="big-number" style={{color: '#2563EB'}}>
          73%
        </div>
        <p style={{fontSize: '1.2rem', fontWeight: '600', marginBottom: '2rem', color: '#1a202c'}}>
          of sports fans now consume content on mobile devices
        </p>
      </div>
      
      <div className="two-column">
        <div>
          <div className="key-point">
            <h3>🎮 Gamification is Mainstream</h3>
            <p>
              Duolingo (500M+ users) and fitness apps have proven interactive learning works
            </p>
          </div>
          
          <div className="key-point">
            <h3>📚 Educational Content Demand</h3>
            <p>
              YouTube sports content generates 2B+ views monthly
            </p>
          </div>
        </div>
        
        <div>
          <div className="key-point">
            <h3>👶 Gen Z Sports Engagement</h3>
            <p>
              Traditional TV viewership down 15%, but digital sports engagement up 45%
            </p>
          </div>
          
          <div className="key-point">
            <h3>🤖 Real-Time Technology</h3>
            <p>
              Advanced APIs and AI now make instant sports analysis technically feasible
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

---

## Slide 5: Market Opportunity 📊

<div className="slide-container slide-market">
  <div className="slide-content">
    <div>
      <h1 className="slide-title">
        Large addressable market with clear entry point
      </h1>
    </div>
    
    <div className="main-content">
      <div className="three-column">
        <div className="market-card">
          <h3>Total Addressable Market</h3>
          <div className="market-value">
            $15.2B
          </div>
          <p>
            Sports media, interactive entertainment, and educational technology combined
          </p>
        </div>
        
        <div className="market-card">
          <h3>Service Addressable Market</h3>
          <div className="market-value sam">
            $2.8B
          </div>
          <p>
            Interactive sports platforms focused on real-time engagement and education
          </p>
        </div>
        
        <div className="market-card">
          <h3>Service Obtainable Market</h3>
          <div className="market-value som">
            $340M
          </div>
          <p>
            Sports fans seeking interactive referee education and real-time call analysis
          </p>
        </div>
      </div>
      
      <div className="bottom-highlight">
        <div className="key-point">
          <h3>🎯 Market Entry Strategy</h3>
          <p>
            Target the underserved referee education segment to build loyal user base, then expand to broader sports content and adjacent markets
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

---

## Slide 6: Financial Projections 📈

<div className="slide-container">
  <div className="slide-content" style={{background: 'linear-gradient(135deg, #fefefe 0%, #f8f9fa 100%)'}}>
    <div>
      <h1 className="slide-title">
        Conservative path to $1.2M ARR in 36 months
      </h1>
    </div>
    
    <div className="main-content">
      <div className="four-column">
        <div className="metric-card">
          <h3 style={{color: '#64748b'}}>Today</h3>
          <div className="metric-value" style={{color: '#64748b'}}>
            Pre-Beta
          </div>
          <p>
            MVP 85% Done
          </p>
        </div>
        
        <div className="metric-card">
          <h3 style={{color: '#059669'}}>Month 12</h3>
          <div className="metric-value" style={{color: '#059669'}}>
            $17K
          </div>
          <p>
            1K Beta Users
          </p>
        </div>
        
        <div className="metric-card">
          <h3 style={{color: '#2563EB'}}>Month 24</h3>
          <div className="metric-value" style={{color: '#2563EB'}}>
            $300K
          </div>
          <p>
            25K Active Users
          </p>
        </div>
        
        <div className="metric-card">
          <h3 style={{color: '#7c3aed'}}>Month 36</h3>
          <div className="metric-value" style={{color: '#7c3aed'}}>
            $1.2M
          </div>
          <p>
            100K Active Users
          </p>
        </div>
      </div>
      
      <div className="two-column">
        <div className="key-point">
          <h3>💰 Revenue Model</h3>
          <p>
            • 12% premium conversion rate (industry benchmark)<br/>
            • $119 annual LTV per user<br/>
            • 27% annual churn rate<br/>
            • 6.8% e-commerce conversion rate
          </p>
        </div>
        
        <div className="key-point">
          <h3>🔥 Key Milestones</h3>
          <p>
            • Beta Launch: Q1 2025<br/>
            • Product-market fit: Month 18<br/>
            • Break-even: Month 30<br/>
            • Series A ready: Month 24-30
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

---

## Slide 7: The Team 👥

<div className="slide-container slide-team">
  <div className="slide-content">
    <div>
      <h1 className="slide-title">
        Experienced leadership with proven track record
      </h1>
    </div>
    
    <div className="main-content">
      <div className="two-column">
        <div>
          <div className="key-point">
            <h3>👑 Chief Executive Officer</h3>
            <div style={{margin: '1rem 0'}}>
              <h4 style={{color: '#1a202c', fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem'}}>
                Julian R. Geiger - CEO
              </h4>
              <p style={{fontSize: '0.95rem'}}>
                • Former CEO of Aeropostale ($1B+ retail empire)<br/>
                • 30+ years retail & consumer brand experience<br/>
                • Columbia MBA, proven leader in consumer engagement
              </p>
            </div>
          </div>
          
          <div className="key-point" style={{marginTop: '1.5rem'}}>
            <h3>🧠 Advisory Board</h3>
            <p style={{fontSize: '0.95rem', lineHeight: '1.6'}}>
              • <strong>Former ESPN Executive</strong> - Content strategy<br/>
              • <strong>Ex-NBA Referee</strong> - Rules expertise<br/>
              • <strong>Tech Industry Veteran</strong> - Scaling guidance
            </p>
          </div>
        </div>
        
        <div>
          <div className="key-point">
            <h3>⚡ Technical Partner</h3>
            <div style={{margin: '1rem 0'}}>
              <h4 style={{color: '#1a202c', fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem'}}>
                SkaFld Studio - Technical Partner
              </h4>
              <p style={{fontSize: '0.95rem'}}>
                • LA Based Venture Studio<br/>
                • Advanced architecture for high-traffic sports platforms<br/>
                • Real-time systems with proven scalability expertise
              </p>
            </div>
          </div>
          
          <div className="key-point" style={{marginTop: '1.5rem'}}>
            <h3>🎯 Why We'll Win</h3>
            <p style={{fontSize: '0.95rem'}}>
              ✅ <strong>Retail & consumer brand mastery</strong><br/>
              ✅ <strong>Technical scalability & innovation</strong><br/>
              ✅ <strong>Sports industry insider connections</strong><br/>
              ✅ <strong>Proven execution track record</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
    
    <div className="bottom-highlight">
      <div className="highlight-text" style={{textAlign: 'center', width: '100%'}}>
        This team combines retail excellence with cutting-edge technology
      </div>
    </div>
  </div>
</div>

---

## Slide 8: Investment Opportunity 💰

<div className="slide-container slide-cover">
  <div className="slide-content centered-content">
    <div>
      <h1 className="slide-title" style={{color: 'white', fontSize: '3.2rem'}}>
        Investment Opportunity
      </h1>
      
      <div className="big-number" style={{color: 'white', fontSize: '5rem'}}>
        $1.5M
      </div>
      
      <p style={{fontSize: '1.3rem', marginBottom: '2rem', color: '#e2e8f0'}}>
        Pre-Seed Round | $6M Pre-Money Valuation
      </p>
    </div>
    
    <div className="two-column" style={{textAlign: 'left', color: 'white'}}>
      <div>
        <h3 style={{color: 'white', fontSize: '1.2rem', marginBottom: '1rem'}}>🎯 Use of Funds</h3>
        <p style={{fontSize: '1rem', lineHeight: '1.7'}}>
          • 50% Product Development & Engineering<br/>
          • 25% Beta Launch & User Acquisition<br/>
          • 15% Content & Partnerships<br/>
          • 10% Operations & Legal
        </p>
      </div>
      
      <div>
        <h3 style={{color: 'white', fontSize: '1.2rem', marginBottom: '1rem'}}>📊 Investor Returns</h3>
        <p style={{fontSize: '1rem', lineHeight: '1.7'}}>
          • Series A Target: 3-4x return in 24 months<br/>
          • Exit Potential: $50M-500M acquisition<br/>
          • Comparable exits: DraftKings $3.3B, Discord $15B
        </p>
      </div>
    </div>
    
    <div>
      <div style={{marginTop: '2rem', fontSize: '1.2rem'}}>
        <strong>
          Let's build the future of sports fan engagement together
        </strong>
      </div>
      
      <p style={{marginTop: '1rem', fontSize: '1rem', color: '#e2e8f0'}}>
        contact@ref-u.com | (555) 123-4567
      </p>
    </div>
  </div>
</div>

