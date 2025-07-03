import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'jrm3dyyn',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01'
});

export const usePreviewSubscription = (query, subscriptionOptions) => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const subscription = client.listen(query, subscriptionOptions).subscribe({
      next: (update) => {
        setData(update.result);
        setLoading(false);
      },
      error: (err) => {
        console.error('Subscription error:', err);
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, [query]);

  return { data, loading };
};

export const SanityContext = React.createContext({
  client,
  usePreviewSubscription
});

export const useSanity = () => React.useContext(SanityContext);
