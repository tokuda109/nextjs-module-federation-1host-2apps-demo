import { useRouter } from 'next/router';

import { Tabs } from '~/components/Tabs';

export default function IndexPage() {
  const router = useRouter();

  const onTab = (index: number) => {
    router.push(`/tab${index}`);
  };

  return (
    <main>
      <Tabs onClick={onTab} />
    </main>
  );
}
