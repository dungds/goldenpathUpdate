import { H2, H3, H4, Paragraph, Button } from "@/components/ui";
import FaqSection from "@/components/FraSection";
import Link from "next/link";
export default function NotFound() {
  return (
    <div>
      <div className="py-20 section-container flex flex-col   text-text-on-dark text-center px-4">
        <H2 className="text-8xl md:text-9xl  font-bold mb-4 text-text-on-dark">
          404
        </H2>

        <H3 className="text-xl mb-6 font-medium">
          We&apos;re sorry, but the page you requested has moved or doesn&apos;t
          exist.
        </H3>
        <div className="flex items-center justify-center">
          <Button href="/">Return to homepage</Button>
        </div>
        <div className="mt-6 ">
          Or{" "}
          <Link
            className="hover:text-primary underline underline-offset-2"
            href="/contact"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <FaqSection />
    </div>
  );
}
