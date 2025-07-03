export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      // Pitch Slides
      S.listItem()
        .title('Pitch Slides')
        .child(
          S.documentList()
            .title('Pitch Slides')
            .filter('_type == "slide"')
            .defaultOrdering([{field: 'slideNumber', direction: 'asc'}])
        ),

      // Business Model
      S.listItem()
        .title('Business Model')
        .child(
          S.document()
            .title('Business Model')
            .schemaType('businessModel')
            .documentId('business-model')
        ),

      // Market Analysis
      S.listItem()
        .title('Market Analysis')
        .child(
          S.document()
            .title('Market Analysis')
            .schemaType('marketAnalysis')
            .documentId('market-analysis')
        ),

      // Investor Comments
      S.listItem()
        .title('Investor Comments')
        .child(
          S.list()
            .title('Comments by Status')
            .items([
              S.listItem()
                .title('New Comments')
                .child(
                  S.documentList()
                    .title('New Comments')
                    .filter('_type == "comment" && status == "new"')
                    .defaultOrdering([{field: 'createdAt', direction: 'desc'}])
                ),
              S.listItem()
                .title('In Review')
                .child(
                  S.documentList()
                    .title('Comments In Review')
                    .filter('_type == "comment" && status == "review"')
                    .defaultOrdering([{field: 'createdAt', direction: 'desc'}])
                ),
              S.listItem()
                .title('Addressed')
                .child(
                  S.documentList()
                    .title('Addressed Comments')
                    .filter('_type == "comment" && status == "addressed"')
                    .defaultOrdering([{field: 'createdAt', direction: 'desc'}])
                )
            ])
        )
    ])
