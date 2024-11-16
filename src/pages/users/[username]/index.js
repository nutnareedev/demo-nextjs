import { useRouter } from 'next/router';
import Link from "next/link";
import dynamic from 'next/dynamic';
const MyComponent = dynamic(() => import('../../../components/Mycomponent'));

export default function User() {
  const router = useRouter();
  const { username } = router.query;

  return (
    <div>
      <h1>User Page</h1>
      <h1>Username: {username}</h1>
      <MyComponent title="Hello, Next.js!" />
      <Link href="/posts/123/comments/456">Go to Commemt Page</Link>
    </div>
  );
}
