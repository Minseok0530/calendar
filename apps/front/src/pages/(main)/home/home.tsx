import { Button } from '@radix-ui/themes';

export default function Home() {
  return (
    <div className="w-full flex justify-center">
      <Button
        onClick={() => {
          console.log('text');
        }}
      >
        Home
      </Button>
    </div>
  );
}
