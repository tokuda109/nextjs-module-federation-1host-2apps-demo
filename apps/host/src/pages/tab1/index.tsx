import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { Tabs } from '~/components/Tabs';

const Tab1 = dynamic(() => import('app1/Tab1'), {
  ssr: false,
});

export default function Tab1Page() {
  const router = useRouter();

  const onTab = (index: number) => {
    router.push(`/tab${index}`);
  };

  return (
    <main>
      <Tabs onClick={onTab} />

      <Tab1 />
    </main>
  );
}
