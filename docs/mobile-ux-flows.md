---
sidebar_position: 3
title: Mobile UX Flows
description: Detailed mobile user experience flows and conversion funnels
---

# Mobile UX Flows - Mermaid Wireframes

*Detailed Mobile User Experience Visualization*

## Mobile Onboarding Flow (375px)

```mermaid
journey
    title New User Mobile Onboarding Journey
    section Discovery
      Social Media Ad: 7: User
      Landing Page Visit: 8: User
      Watch Demo Video: 9: User
    section Sign Up
      Click Get Started: 8: User
      OAuth Selection: 9: User
      Account Creation: 8: User
    section Personalization
      Sports Selection: 9: User
      Team Following: 8: User
      Experience Level: 7: User
      Notifications: 6: User
    section First Experience
      Welcome Complete: 9: User
      Join First Game: 10: User
      Vote on Call: 10: User
      Earn XP: 10: User
    section Retention
      Join Cohort: 9: User
      Return Next Day: 8: User
      Become Power User: 10: User
```

## Live Game Interface State Diagram

```mermaid
stateDiagram-v2
    [*] --> GameSelection
    
    GameSelection --> LiveGame : Select Game
    GameSelection --> NoGames : No Live Games
    
    LiveGame --> WaitingForCall : Game in Progress
    WaitingForCall --> NewCall : Referee Call Made
    
    NewCall --> VotingActive : Display Call Details
    VotingActive --> VoteSubmitted : User Votes
    VotingActive --> VoteSkipped : User Skips
    
    VoteSubmitted --> XPAwarded : +15 XP
    VoteSkipped --> NextCall : Wait for Next
    
    XPAwarded --> LevelUp : XP Threshold Met
    XPAwarded --> NextCall : Continue Playing
    
    LevelUp --> UnlockFeatures : New Benefits
    UnlockFeatures --> NextCall
    
    NextCall --> WaitingForCall
    NextCall --> GameEnded : Game Finished
    
    GameEnded --> PostGameSummary
    PostGameSummary --> GameSelection
    
    NoGames --> GameSelection : Refresh
```

## Revenue Conversion Funnel

```mermaid
graph TD
    A[Free User 100%] --> B{First Premium Trigger}
    
    B -->|Advanced Analytics| C[Paywall Encounter 34%]
    B -->|Prediction Limit| D[Usage Limit Hit 28%]
    B -->|Exclusive Content| E[Content Gate 15%]
    
    C --> F{Conversion Decision}
    D --> F
    E --> F
    
    F -->|Subscribe| G[Premium Trial Start 15.2%]
    F -->|Decline| H[Continue Free 84.8%]
    
    G --> I[7-Day Free Trial]
    I --> J{Trial Experience}
    
    J -->|Positive| K[Convert to Paid 73%]
    J -->|Negative| L[Cancel Trial 27%]
    
    K --> M[Monthly Subscriber 9.99 USD]
    M --> N{Retention Check}
    
    N -->|Stay| O[Retained User 85%]
    N -->|Churn| P[Churned User 15%]
    
    H --> Q[Re-engagement Campaign]
    Q --> R{Second Chance}
    R -->|Convert| G
    R -->|Remain Free| S[Free User Lifecycle]
    
    O --> T[Annual LTV: 119 USD]
    L --> U[Feedback Collection]
    P --> U
    
    style A fill:#6b7280,color:white
    style G fill:#3b82f6,color:white
    style K fill:#10b981,color:white
    style T fill:#8b5cf6,color:white
```

## 🛒 Social Commerce User Flow

```mermaid
graph LR
    subgraph "Trigger Event"
        A1[Team Victory]
        A2[Big Play]
        A3[Season Milestone]
    end
    
    subgraph "Social Context"
        B1[Cohort Celebration]
        B2[Live Chat Buzz]
        B3[FOMO Creation]
    end
    
    subgraph "Product Discovery"
        C1[Contextual Store Display]
        C2[Featured Products]
        C3[Limited Time Offers]
    end
    
    subgraph "Social Proof"
        D1[Friend Activity Feed]
        D2[Purchase Notifications]
        D3[Group Buying Options]
    end
    
    subgraph "Conversion"
        E1[Add to Cart]
        E2[Apply Discounts]
        E3[Social Checkout]
    end
    
    subgraph "Viral Loop"
        F1[Share Purchase]
        F2[Friend Sees Activity]
        F3[Triggers Friend Purchase]
    end
    
    A1 --> B1
    A2 --> B2  
    A3 --> B3
    
    B1 --> C1
    B2 --> C2
    B3 --> C3
    
    C1 --> D1
    C2 --> D2
    C3 --> D3
    
    D1 --> E1
    D2 --> E2
    D3 --> E3
    
    E1 --> F1
    E2 --> F2
    E3 --> F3
    
    F3 --> B1
    
    style A1 fill:#10b981,color:white
    style E3 fill:#f59e0b,color:white
    style F3 fill:#ec4899,color:white
```

## 🎮 Gamification Engagement Loop

```mermaid
graph TB
    subgraph "User Actions"
        A1[Vote on Call]
        A2[Make Prediction]
        A3[Share Content]
        A4[Help Community]
        A5[Daily Login]
    end
    
    subgraph "Immediate Rewards"
        B1[+15 XP]
        B2[+25 XP]
        B3[+20 XP]
        B4[+10 XP]
        B5[+5 XP]
    end
    
    subgraph "Progress Tracking"
        C1[XP Accumulation]
        C2[Streak Counting]
        C3[Accuracy Metrics]
        C4[Social Recognition]
    end
    
    subgraph "Level Progression"
        D1[Level Up Animation]
        D2[New Badge Earned]
        D3[Feature Unlocked]
        D4[Status Upgraded]
    end
    
    subgraph "Social Competition"
        E1[Leaderboard Update]
        E2[Friend Notifications]
        E3[Cohort Ranking]
        E4[Challenge Progress]
    end
    
    subgraph "Retention Hooks"
        F1[Daily Challenges]
        F2[Streak Bonuses]
        F3[Limited Events]
        F4[Social Pressure]
    end
    
    A1 --> B1
    A2 --> B2
    A3 --> B3
    A4 --> B4
    A5 --> B5
    
    B1 --> C1
    B2 --> C2
    B3 --> C3
    B4 --> C4
    B5 --> C1
    
    C1 --> D1
    C2 --> D2
    C3 --> D3
    C4 --> D4
    
    D1 --> E1
    D2 --> E2
    D3 --> E3
    D4 --> E4
    
    E1 --> F1
    E2 --> F2
    E3 --> F3
    E4 --> F4
    
    F1 --> A1
    F2 --> A2
    F3 --> A3
    F4 --> A4
    
    style A1 fill:#3b82f6,color:white
    style D1 fill:#10b981,color:white
    style E1 fill:#f59e0b,color:white
    style F4 fill:#ec4899,color:white
```

## Mobile Screen Flow Hierarchy

```mermaid
graph TD
    subgraph "App Navigation"
        A[Splash Screen]
        B[Landing Page]
        C[Authentication]
        D[Onboarding]
        E[Main App]
    end
    
    subgraph "Main App Sections"
        E --> F[Live Games]
        E --> G[Replay Mode]
        E --> H[Community]
        E --> I[Profile]
        E --> J[Store]
    end
    
    subgraph "Live Games Flow"
        F --> K[Game List]
        K --> L[Game Dashboard]
        L --> M[Call Voting]
        M --> N[Results]
        N --> O[Next Call]
    end
    
    subgraph "Community Flow"
        H --> P[Cohort Selection]
        P --> Q[Cohort Chat]
        Q --> R[Member Profiles]
        R --> S[Challenges]
    end
    
    subgraph "Premium Flow"
        F --> T[Premium Gate]
        T --> U[Upgrade Modal]
        U --> V[Payment]
        V --> W[Premium Features]
    end
    
    subgraph "Commerce Flow"
        J --> X[Team Stores]
        X --> Y[Product Details]
        Y --> Z[Checkout]
        Z --> AA[Purchase Complete]
    end
    
    style A fill:#6b7280,color:white
    style E fill:#3b82f6,color:white
    style M fill:#10b981,color:white
    style V fill:#8b5cf6,color:white
    style Z fill:#f59e0b,color:white
```

## User Engagement Metrics Flow

```mermaid
graph LR
    subgraph "Acquisition"
        A1[Social Media]
        A2[Word of Mouth]
        A3[Content Marketing]
        A4[Partnership]
    end
    
    subgraph "Activation"
        B1[Sign Up Complete]
        B2[First Vote Cast]
        B3[XP Earned]
        B4[Cohort Joined]
    end
    
    subgraph "Retention"
        C1[Daily Return]
        C2[Weekly Engagement]
        C3[Monthly Active]
        C4[Long-term Loyalty]
    end
    
    subgraph "Revenue"
        D1[Premium Upgrade]
        D2[Merchandise Purchase]
        D3[Content Creation]
        D4[Referral Revenue]
    end
    
    subgraph "Referral"
        E1[Content Sharing]
        E2[Friend Invites]
        E3[Social Proof]
        E4[Viral Growth]
    end
    
    A1 --> B1
    A2 --> B2
    A3 --> B3
    A4 --> B4
    
    B1 --> C1
    B2 --> C2
    B3 --> C3
    B4 --> C4
    
    C1 --> D1
    C2 --> D2
    C3 --> D3
    C4 --> D4
    
    D1 --> E1
    D2 --> E2
    D3 --> E3
    D4 --> E4
    
    E1 --> A1
    E2 --> A2
    E3 --> A3
    E4 --> A4
    
    style B4 fill:#10b981,color:white
    style C4 fill:#3b82f6,color:white
    style D4 fill:#8b5cf6,color:white
    style E4 fill:#f59e0b,color:white
```

---

*These Mermaid mobile UX flows provide detailed visualization of user interactions, conversion funnels, and engagement patterns optimized for investor presentations and development planning.*
