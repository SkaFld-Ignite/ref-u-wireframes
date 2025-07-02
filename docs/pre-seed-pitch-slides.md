---
sidebar_position: 4
title: Pre-Seed Pitch Slides
description: Interactive 16:9 presentation slides for $1-2M pre-seed funding round with editable content
---

# 🎯 Ref-U Pre-Seed Pitch Presentation

*Professional 16:9 slide deck optimized for pre-seed investor presentations*

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

/* === CITATION STYLES === */
.citation {
  font-size: 0.7rem;
  vertical-align: super;
  color: #2563EB;
  text-decoration: none;
  font-weight: bold;
}

.citation:hover {
  text-decoration: underline;
}

.sources {
  font-size: 0.7rem;
  color: #6b7280;
  margin-top: 1rem;
  padding: 0.5rem;
  background: #f8f9fa;
  border-radius: 4px;
  line-height: 1.3;
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

/* === INTERACTIVE ELEMENTS === */
.editable-text {
  position: relative;
  cursor: pointer;
  padding: 3px 6px;
  border-radius: 4px;
  transition: all 0.2s ease;
  display: inline-block;
}

.editable-text:hover {
  background: rgba(37, 99, 235, 0.1);
  outline: 2px dashed #2563EB;
}

.edit-indicator {
  position: absolute;
  top: -8px;
  right: -8px;
  background: #2563EB;
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.editable-text:hover .edit-indicator {
  opacity: 1;
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
        <span className="editable-text" contentEditable suppressContentEditableWarning>
          REF-U
          <span className="edit-indicator">✏️</span>
        </span>
      </h1>
      <p className="slide-subtitle" style={{fontSize: '1.6rem', color: '#e2e8f0', marginBottom: '2rem'}}>
        <span className="editable-text" contentEditable suppressContentEditableWarning>
          The Future of Sports Fan Engagement
          <span className="edit-indicator">✏️</span>
        </span>
      </p>
      <h2 style={{color: 'white', fontSize: '1.8rem', margin: '1.5rem 0'}}>
        <span className="editable-text" contentEditable suppressContentEditableWarning>
          Pre-Seed Funding Presentation
          <span className="edit-indicator">✏️</span>
        </span>
      </h2>
    </div>
    
    <div>
      <div className="highlight-text" style={{fontSize: '1.2rem', margin: '2rem auto', maxWidth: '550px', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)'}}>
        <span className="editable-text" contentEditable suppressContentEditableWarning>
          Seeking $1.5M to revolutionize how fans learn and engage with sports
          <span className="edit-indicator">✏️</span>
        </span>
      </div>
      <p style={{fontSize: '1.1rem', marginTop: '1.5rem', color: '#e2e8f0'}}>
        <span className="editable-text" contentEditable suppressContentEditableWarning>
          Julian R. Geiger, CEO & Founder<br/>
          contact@ref-u.com | ref-u.com
          <span className="edit-indicator">✏️</span>
        </span>
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
        <span className="editable-text" contentEditable suppressContentEditableWarning>
          Sports fans are frustrated and disconnected
          <span className="edit-indicator">✏️</span>
        </span>
      </h1>
    </div>
    
    <div className="main-content">
      <div className="two-column">
        <div>
          <div className="key-point">
            <h3>
              <span className="editable-text" contentEditable suppressContentEditableWarning>
                78% of sports fans disagree with referee calls<a href="https://www.nielsen.com/insights/2023/sports-fan-engagement-report/" className="citation" target="_blank">¹</a>
                <span className="edit-indicator">✏️</span>
              </span>
            </h3>
            <p>
              <span className="editable-text" contentEditable suppressContentEditableWarning>
                But they don't understand the rules behind the calls
                <span className="edit-indicator">✏️</span>
              </span>
            </p>
          </div>
          
          <div className="key-point">
            <h3>
              <span className="editable-text" contentEditable suppressContentEditableWarning>
                $1.8B lost annually in fan engagement<a href="https://www.sportsbusinessjournal.com/Articles/2023/03/27/fan-engagement-decline" className="citation" target="_blank">²</a>
                <span className="edit-indicator">✏️</span>
              </span>
            </h3>
            <p>
              <span className="editable-text" contentEditable suppressContentEditableWarning>
                Due to confusion and frustration with sports officiating
                <span className="edit-indicator">✏️</span>
              </span>
            </p>
          </div>
        </div>
        
        <div>
          <div className="key-point">
            <h3>
              <span className="editable-text" contentEditable suppressContentEditableWarning>
                65% of sports discussions<a href="https://www.pewresearch.org/internet/2023/02/16/sports-social-media/" className="citation" target="_blank">³</a>
                <span className="edit-indicator">✏️</span>
              </span>
            </h3>
            <p>
              <span className="editable-text" contentEditable suppressContentEditableWarning>
                Focus on controversial referee decisions and rule interpretations
                <span className="edit-indicator">✏️</span>
              </span>
            </p>
          </div>
          
          <div className="key-point">
            <h3>
              <span className="editable-text" contentEditable suppressContentEditableWarning>
                Gen Z fans (18-24) seek interactive experiences<a href="https://www.deloitte.com/global/en/insights/industry/technology/digital-media-trends-survey.html" className="citation" target="_blank">⁴</a>
                <span className="edit-indicator">✏️</span>
              </span>
            </h3>
            <p>
              <span className="editable-text" contentEditable suppressContentEditableWarning>
                Traditional sports media doesn't meet their engagement expectations
                <span className="edit-indicator">✏️</span>
              </span>
            </p>
          </div>
        </div>
      </div>
      
      <div className="sources">
        <strong>Sources:</strong><br/>
        ¹ Nielsen Sports Fan Engagement Report 2023 | ² Sports Business Journal Fan Engagement Study | ³ Pew Research Sports & Social Media Survey | ⁴ Deloitte Digital Media Trends Survey 2023
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
        <span className="editable-text" contentEditable suppressContentEditableWarning>
          The first platform combining real-time referee analysis with educational content
          <span className="edit-indicator">✏️</span>
        </span>
      </h1>
    </div>
    
    <div className="main-content">
      <div className="two-column">
        <div>
          <div className="key-point">
            <h3>🏀 Live Game Integration</h3>
            <p>
              <span className="editable-text" contentEditable suppressContentEditableWarning>
                Real-time referee call analysis during live games
                <span className="edit-indicator">✏️</span>
              </span>
            </p>
          </div>
          
          <div className="key-point">
            <h3>📚 Educational Platform</h3>
            <p>
              <span className="editable-text" contentEditable suppressContentEditableWarning>
                Learn rules through interactive gameplay
                <span className="edit-indicator">✏️</span>
              </span>
            </p>
          </div>
          
          <div className="key-point">
            <h3>👥 Safe Community</h3>
            <p>
              <span className="editable-text" contentEditable suppressContentEditableWarning>
                Moderated discussions focused on learning
                <span className="edit-indicator">✏️</span>
              </span>
            </p>
          </div>
        </div>
        
        <div>
          <div className="key-point">
            <h3>🎮 Gamification System</h3>
            <p>
              <span className="editable-text" contentEditable suppressContentEditableWarning>
                XP, levels, and rewards for participation
                <span className="edit-indicator">✏️</span>
              </span>
            </p>
          </div>
          
          <div className="key-point">
            <h3>📱 Mobile-First Design</h3>
            <p>
              <span className="editable-text" contentEditable suppressContentEditableWarning>
                Built for the next generation of sports fans
                <span className="edit-indicator">✏️</span>
              </span>
            </p>
          </div>
          
          <div className="key-point">
            <h3>💰 Multiple Revenue Streams</h3>
            <p>
              <span className="editable-text" contentEditable suppressContentEditableWarning>
                Premium features, merchandise, creator tools
                <span className="edit-indicator">✏️</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    
    <div className="bottom-highlight">
      <div className="highlight-text" style={{textAlign: 'center', width: '100%'}}>
        <span className="editable-text" contentEditable suppressContentEditableWarning>
          Turn fan frustration into fan education and engagement
          <span className="edit-indicator">✏️</span>
        </span>
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
        <span className="editable-text" contentEditable suppressContentEditableWarning>
          Perfect storm of market conditions
          <span className="edit-indicator">✏️</span>
        </span>
      </h1>
    </div>
    
    <div className="main-content">
      <div style={{textAlign: 'center', margin: '1.5rem 0'}}>
        <div className="big-number" style={{color: '#2563EB'}}>
          <span className="editable-text" contentEditable suppressContentEditableWarning>
            73%<a href="https://www.statista.com/statistics/1252063/mobile-sports-content-consumption/" className="citation" target="_blank">⁵</a>
            <span className="edit-indicator">✏️</span>
          </span>
        </div>
        <p style={{fontSize: '1.2rem', fontWeight: '600', marginBottom: '2rem', color: '#1a202c'}}>
          <span className="editable-text" contentEditable suppressContentEditableWarning>
            of sports fans now consume content on mobile devices
            <span className="edit-indicator">✏️</span>
          </span>
        </p>
      </div>
      
      <div className="two-column">
        <div>
          <div className="key-point">
            <h3>🎮 Gamification is Mainstream</h3>
            <p>
              <span className="editable-text" contentEditable suppressContentEditableWarning>
                Duolingo (500M+ users), Strava, and fitness apps have proven interactive learning works<a href="https://blog.duolingo.com/500-million-duolingo-learners/" className="citation" target="_blank">⁶</a>
                <span className="edit-indicator">✏️</span>
              </span>
            </p>
          </div>
          
          <div className="key-point">
            <h3>📚 Educational Content Demand</h3>
            <p>
              <span className="editable-text" contentEditable suppressContentEditableWarning>
                YouTube sports content generates 2B+ views monthly<a href="https://blog.youtube/news-and-events/youtube-sports-viewership-statistics/" className="citation" target="_blank">⁷</a>
                <span className="edit-indicator">✏️</span>
              </span>
            </p>
          </div>
        </div>
        
        <div>
          <div className="key-point">
            <h3>👶 Gen Z Sports Engagement</h3>
            <p>
              <span className="editable-text" contentEditable suppressContentEditableWarning>
                Traditional TV viewership down 15%, but digital sports engagement up 45%<a href="https://www.nielsen.com/insights/2023/total-audience-report/" className="citation" target="_blank">⁸</a>
                <span className="edit-indicator">✏️</span>
              </span>
            </p>
          </div>
          
          <div className="key-point">
            <h3>🤖 Real-Time Technology</h3>
            <p>
              <span className="editable-text" contentEditable suppressContentEditableWarning>
                Advanced APIs and AI now make instant sports analysis technically feasible
                <span className="edit-indicator">✏️</span>
              </span>
            </p>
          </div>
        </div>
      </div>
      
      <div className="sources">
        <strong>Sources:</strong><br/>
        ⁵ Statista Mobile Sports Consumption 2023 | ⁶ Duolingo User Statistics | ⁷ YouTube Sports Viewership Report | ⁸ Nielsen Total Audience Report 2023
      </div>
    </div>
  </div>
</div>

---

## Slide 5: Market Opportunity ��

<div className="slide-container slide-market">
  <div className="slide-content">
    <div>
      <h1 className="slide-title">
        <span className="editable-text" contentEditable suppressContentEditableWarning>
          Large addressable market with clear entry point
          <span className="edit-indicator">✏️</span>
        </span>
      </h1>
    </div>
    
    <div className="main-content">
      <div className="three-column">
        <div className="market-card">
          <h3>Total Addressable Market</h3>
          <div className="market-value">
            <span className="editable-text" contentEditable suppressContentEditableWarning>
              $15.2B<a href="https://www.grandviewresearch.com/industry-analysis/sports-analytics-market" className="citation" target="_blank">⁹</a>
              <span className="edit-indicator">✏️</span>
            </span>
          </div>
          <p>
            <span className="editable-text" contentEditable suppressContentEditableWarning>
              Sports media, interactive entertainment, and educational technology combined
              <span className="edit-indicator">✏️</span>
            </span>
          </p>
        </div>
        
        <div className="market-card">
          <h3>Service Addressable Market</h3>
          <div className="market-value sam">
            <span className="editable-text" contentEditable suppressContentEditableWarning>
              $2.8B<a href="https://www.marketsandmarkets.com/Market-Reports/sports-software-market-124984913.html" className="citation" target="_blank">¹⁰</a>
              <span className="edit-indicator">✏️</span>
            </span>
          </div>
          <p>
            <span className="editable-text" contentEditable suppressContentEditableWarning>
              Interactive sports platforms focused on real-time engagement and education
              <span className="edit-indicator">✏️</span>
            </span>
          </p>
        </div>
        
        <div className="market-card">
          <h3>Service Obtainable Market</h3>
          <div className="market-value som">
            <span className="editable-text" contentEditable suppressContentEditableWarning>
              $340M<a href="#" className="citation">¹¹</a>
              <span className="edit-indicator">✏️</span>
            </span>
          </div>
          <p>
            <span className="editable-text" contentEditable suppressContentEditableWarning>
              Sports fans seeking interactive referee education and real-time call analysis across all demographics
              <span className="edit-indicator">✏️</span>
            </span>
          </p>
        </div>
      </div>
      
      <div className="bottom-highlight">
        <div className="key-point">
          <h3>🎯 Market Entry Strategy</h3>
          <p>
            <span className="editable-text" contentEditable suppressContentEditableWarning>
              Target the underserved referee education segment to build loyal user base, then expand to broader sports content and adjacent markets
              <span className="edit-indicator">✏️</span>
            </span>
          </p>
        </div>
      </div>
      
      <div className="sources">
        <strong>Sources:</strong><br/>
        ⁹ Grand View Research Sports Analytics Market | ¹⁰ MarketsandMarkets Sports Software Report | ¹¹ Company Analysis & Market Research
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
        <span className="editable-text" contentEditable suppressContentEditableWarning>
          Conservative path to $1.2M ARR in 36 months
          <span className="edit-indicator">✏️</span>
        </span>
      </h1>
    </div>
    
    <div className="main-content">
      <div className="four-column">
        <div className="metric-card">
          <h3 style={{color: '#64748b'}}>Today</h3>
          <div className="metric-value" style={{color: '#64748b'}}>
            <span className="editable-text" contentEditable suppressContentEditableWarning>
              $0<a href="#" className="citation">¹²</a>
              <span className="edit-indicator">✏️</span>
            </span>
          </div>
          <p>
            <span className="editable-text" contentEditable suppressContentEditableWarning>
              50K Users
              <span className="edit-indicator">✏️</span>
            </span>
          </p>
        </div>
        
        <div className="metric-card">
          <h3 style={{color: '#059669'}}>Month 12</h3>
          <div className="metric-value" style={{color: '#059669'}}>
            <span className="editable-text" contentEditable suppressContentEditableWarning>
              $900K<a href="#" className="citation">¹²</a>
              <span className="edit-indicator">✏️</span>
            </span>
          </div>
          <p>
            <span className="editable-text" contentEditable suppressContentEditableWarning>
              200K Users
              <span className="edit-indicator">✏️</span>
            </span>
          </p>
        </div>
        
        <div className="metric-card">
          <h3 style={{color: '#2563EB'}}>Month 24</h3>
          <div className="metric-value" style={{color: '#2563EB'}}>
            <span className="editable-text" contentEditable suppressContentEditableWarning>
              $3.2M<a href="#" className="citation">¹²</a>
              <span className="edit-indicator">✏️</span>
            </span>
          </div>
          <p>
            <span className="editable-text" contentEditable suppressContentEditableWarning>
              500K Users
              <span className="edit-indicator">✏️</span>
            </span>
          </p>
        </div>
        
        <div className="metric-card">
          <h3 style={{color: '#7c3aed'}}>Month 36</h3>
          <div className="metric-value" style={{color: '#7c3aed'}}>
            <span className="editable-text" contentEditable suppressContentEditableWarning>
              $1.2M<a href="#" className="citation">¹²</a>
              <span className="edit-indicator">✏️</span>
            </span>
          </div>
          <p>
            <span className="editable-text" contentEditable suppressContentEditableWarning>
              100K Users
              <span className="edit-indicator">✏️</span>
            </span>
          </p>
        </div>
      </div>
      
      <div className="two-column">
        <div className="key-point">
          <h3>💰 Revenue Assumptions</h3>
          <p>
            <span className="editable-text" contentEditable suppressContentEditableWarning>
              • 12% premium conversion rate (industry benchmark<a href="https://www.recurly.com/research/subscription-conversion-rate-benchmarks/" className="citation" target="_blank">¹³</a>)<br/>
              • $119 annual LTV per user (based on comparable apps<a href="https://blog.profitwell.com/saas-ltv-benchmarks" className="citation" target="_blank">¹⁴</a>)<br/>
              • 20% annual churn rate<br/>
              • 6% e-commerce conversion rate
              <span className="edit-indicator">✏️</span>
            </span>
          </p>
        </div>
        
        <div className="key-point">
          <h3>🔥 Path to Profitability</h3>
          <p>
            <span className="editable-text" contentEditable suppressContentEditableWarning>
              • Break-even: Month 18<br/>
              • 40% gross margin by Month 24<br/>
              • Series A ready: Month 18-24
              <span className="edit-indicator">✏️</span>
            </span>
          </p>
        </div>
      </div>
      
      <div className="sources">
        <strong>Sources:</strong><br/>
        ¹² Company Financial Projections | ¹³ Recurly Subscription Benchmarks | ¹⁴ ProfitWell SaaS LTV Study
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
        <span className="editable-text" contentEditable suppressContentEditableWarning>
          Experienced leadership with proven track record
          <span className="edit-indicator">✏️</span>
        </span>
      </h1>
    </div>
    
    <div className="main-content">
      <div className="two-column">
        <div>
          <div className="key-point">
            <h3>👑 Chief Executive Officer</h3>
            <div style={{margin: '1rem 0'}}>
              <h4 style={{color: '#1a202c', fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem'}}>
                <span className="editable-text" contentEditable suppressContentEditableWarning>
                  Julian R. Geiger - CEO
                  <span className="edit-indicator">✏️</span>
                </span>
              </h4>
              <p style={{fontSize: '0.95rem'}}>
                <span className="editable-text" contentEditable suppressContentEditableWarning>
                  • Former CEO of Aeropostale ($1B+ retail empire)<br/>
                  • 30+ years retail & consumer brand experience<br/>
                  • Columbia MBA, proven leader in consumer engagement
                  <span className="edit-indicator">✏️</span>
                </span>
              </p>
            </div>
          </div>
          
          <div className="key-point" style={{marginTop: '1.5rem'}}>
            <h3>🧠 Advisory Board</h3>
            <p style={{fontSize: '0.95rem', lineHeight: '1.6'}}>
              <span className="editable-text" contentEditable suppressContentEditableWarning>
                • <strong>Former ESPN Executive</strong> - Content strategy<br/>
                • <strong>Ex-NBA Referee</strong> - Rules expertise<br/>
                • <strong>Tech Industry Veteran</strong> - Scaling guidance
                <span className="edit-indicator">✏️</span>
              </span>
            </p>
          </div>
        </div>
        
        <div>
          <div className="key-point">
            <h3>⚡ Technical Partner</h3>
            <div style={{margin: '1rem 0'}}>
              <h4 style={{color: '#1a202c', fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem'}}>
                <span className="editable-text" contentEditable suppressContentEditableWarning>
                  SkaFld Studio - Technical Partner
                  <span className="edit-indicator">✏️</span>
                </span>
              </h4>
              <p style={{fontSize: '0.95rem'}}>
                <span className="editable-text" contentEditable suppressContentEditableWarning>
                  • LA Based Venture Studio<br/>
                  • Advanced architecture for high-traffic sports platforms<br/>
                  • Real-time systems with proven scalability expertise
                  <span className="edit-indicator">✏️</span>
                </span>
              </p>
            </div>
          </div>
          
          <div className="key-point" style={{marginTop: '1.5rem'}}>
            <h3>🎯 Why We'll Win</h3>
            <p style={{fontSize: '0.95rem'}}>
              <span className="editable-text" contentEditable suppressContentEditableWarning>
                ✅ <strong>Retail & consumer brand mastery</strong><br/>
                ✅ <strong>Technical scalability & innovation</strong><br/>
                ✅ <strong>Sports industry insider connections</strong><br/>
                ✅ <strong>Proven execution track record</strong>
                <span className="edit-indicator">✏️</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    
    <div className="bottom-highlight">
      <div className="highlight-text" style={{textAlign: 'center', width: '100%'}}>
        <span className="editable-text" contentEditable suppressContentEditableWarning>
          This team combines retail excellence with cutting-edge technology
          <span className="edit-indicator">✏️</span>
        </span>
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
        <span className="editable-text" contentEditable suppressContentEditableWarning>
          Investment Opportunity
          <span className="edit-indicator">✏️</span>
        </span>
      </h1>
      
      <div className="big-number" style={{color: 'white', fontSize: '5rem'}}>
        <span className="editable-text" contentEditable suppressContentEditableWarning>
          $1.5M
          <span className="edit-indicator">✏️</span>
        </span>
      </div>
      
      <p style={{fontSize: '1.3rem', marginBottom: '2rem', color: '#e2e8f0'}}>
        <span className="editable-text" contentEditable suppressContentEditableWarning>
          Pre-Seed Round | $6M Pre-Money Valuation
          <span className="edit-indicator">✏️</span>
        </span>
      </p>
    </div>
    
    <div className="two-column" style={{textAlign: 'left', color: 'white'}}>
      <div>
        <h3 style={{color: 'white', fontSize: '1.2rem', marginBottom: '1rem'}}>🎯 Use of Funds</h3>
        <p style={{fontSize: '1rem', lineHeight: '1.7'}}>
          <span className="editable-text" contentEditable suppressContentEditableWarning>
            • 40% Product Development & Engineering<br/>
            • 30% Marketing & User Acquisition<br/>
            • 20% Content & Partnerships<br/>
            • 10% Operations & Legal
            <span className="edit-indicator">✏️</span>
          </span>
        </p>
      </div>
      
      <div>
        <h3 style={{color: 'white', fontSize: '1.2rem', marginBottom: '1rem'}}>📊 Investor Returns</h3>
        <p style={{fontSize: '1rem', lineHeight: '1.7'}}>
          <span className="editable-text" contentEditable suppressContentEditableWarning>
            • Series A Target: 4-5x return in 18 months<br/>
            • Exit Potential: $50M-500M acquisition<br/>
            • Comparable exits: DraftKings ($3.3B<a href="https://www.sec.gov/Archives/edgar/data/1772757/000119312520092662/d860736d424b4.htm" className="citation" target="_blank">¹⁵</a>), Discord ($15B<a href="https://techcrunch.com/2021/09/01/discord-valuation-15-billion/" className="citation" target="_blank">¹⁶</a>)
            <span className="edit-indicator">✏️</span>
          </span>
        </p>
      </div>
    </div>
    
    <div>
      <div style={{marginTop: '2rem', fontSize: '1.2rem'}}>
        <strong>
          <span className="editable-text" contentEditable suppressContentEditableWarning>
            Let's revolutionize sports fan engagement together
            <span className="edit-indicator">✏️</span>
          </span>
        </strong>
      </div>
      
      <p style={{marginTop: '1rem', fontSize: '1rem', color: '#e2e8f0'}}>
        <span className="editable-text" contentEditable suppressContentEditableWarning>
          contact@ref-u.com | (555) 123-4567
          <span className="edit-indicator">✏️</span>
        </span>
      </p>
    </div>
    
    <div className="sources" style={{marginTop: '2rem', background: 'rgba(255,255,255,0.1)', color: '#e2e8f0'}}>
      <strong>Sources:</strong><br/>
      ¹⁵ DraftKings SEC Filing | ¹⁶ TechCrunch Discord Valuation Report
    </div>
  </div>
</div>
