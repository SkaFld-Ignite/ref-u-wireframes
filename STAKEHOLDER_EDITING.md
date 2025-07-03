# 📝 Stakeholder Content Editing Strategy

## Current Setup
- **Docusaurus** site deployed on Vercel
- **GitHub** repository with markdown content
- **Manual editing** required for content updates

## Proposed Novel.sh Integration

### Option 1: Novel.sh Direct
```javascript
// novel-config.js
export default {
  github: {
    repo: 'SkaFld-Ignite/ref-u-wireframes',
    branch: 'main',
    autoCommit: true
  },
  content: {
    slidesPath: 'docs/',
    autoSync: true
  }
}
```

### Option 2: Forestry.io (Recommended)
- Visual editor for pitch slides
- Stakeholders can edit without technical knowledge
- Automatic GitHub commits
- Preview before publishing

### Option 3: Custom Solution
```javascript
// webhook-handler.js
app.post('/content-update', (req, res) => {
  const { content, file } = req.body;
  
  // Update GitHub file
  await github.repos.updateFile({
    path: `docs/${file}`,
    content: Buffer.from(content).toString('base64'),
    message: 'Content update from stakeholder'
  });
  
  // Trigger Vercel deployment
  await vercel.triggerDeploy();
});
```

## Benefits for Ref-U Project

1. **Investor Feedback**: Investors can suggest slide changes directly
2. **Team Collaboration**: Non-technical team members can update content
3. **Real-time Updates**: Changes appear on live site within minutes
4. **Version Control**: All changes tracked in Git history
5. **Approval Workflow**: Optional review before publishing

## Implementation Timeline
- **Week 1**: Set up Forestry.io integration
- **Week 2**: Configure stakeholder access
- **Week 3**: Test workflow and train users
- **Week 4**: Go live with collaborative editing

## Cost Consideration
- Novel.sh: ~$20-50/month
- Forestry.io: Free tier available
- TinaCMS: Open source, hosting costs only
