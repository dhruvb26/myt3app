import { Button } from "~/components/ui/button";
import FAQ from "./_components/faq";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-grow flex-col items-center justify-center space-y-10">
        <div className="text-box flex flex-col items-center gap-4 text-center">
          <h1 className="text-6xl font-bold">My T3 App</h1>
          <p className="text-lg font-light text-gray-500">
            Get started right away.
          </p>
        </div>
        <div className="button-box flex flex-row items-center justify-center gap-2 p-2">
          <Button className="shadow-lg">Get Started</Button>
          <Button variant={"secondary"} className="shadow-lg">
            Learn More
          </Button>
        </div>
        <FAQ />
      </div>
      <footer className="w-full bg-gray-200 p-4 text-center">
        <p className="text-sm text-gray-600">
          © 2024 My T3 App, Inc. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
