import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import AppIcon from "@/components/AppIcon";

const geistMono = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistMono.className} flex flex-col bg-white pt-10 p-8 w-full items-center mt-0 sm:mt-20  font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col justify-center">
        {/* Me Section */}
        <span className="flex items-center gap-2">
          <h2 className="text-2xl sm:text-4xl font-light">
            Hi, my name is <span className="font-bold">Julian</span>
          </h2>
          <Image
            src="/images/pb.webp"
            alt="me"
            width={60}
            height={60}
            className="rounded-full"
          />
        </span>
        {/* Description */}
        <span className="text-md sm:text-lg font-light">
          <p className="mb-8">
            I&apos;m a 24 years old Full Stack Developer
            <br />
            with additional expertise in Graphic Design, SEO and Marketing.
          </p>
        </span>
        {/* Coding Projects */}
        <span className="flex flex-col sm:items-center sm:flex-row gap-2 mb-8">
          <h2 className="text-xl sm:text-2xl font-light">
            I&apos;m currently working on
          </h2>

          <span className="flex items-center gap-2 group/animation">
            <AppIcon
              href="https://spotify.juliansngr.dev/"
              src="/images/reactify-icon.webp"
              alt="me"
              tooltip="reactify | music streaming app"
              className="sm:translate-x-3 sm:rotate-12 group-hover/animation:translate-x-0 group-hover/animation:rotate-0 transition-all duration-300 hover:scale-110"
            />
            <AppIcon
              href="https://app.mon-ey.com"
              src="/images/mon-ey-icon.webp"
              alt="mon-ey-icon"
              tooltip="mon-ey | intelligent finance tracker"
              className="sm:-translate-x-3 sm:-rotate-12 group-hover/animation:translate-x-0 group-hover/animation:rotate-0 transition-all duration-300 hover:scale-110"
            />
            <AppIcon
              href="https://leihweise.juliansngr.dev/"
              src="/images/leihweise-icon.webp"
              alt="leihweise-icon"
              tooltip="leihweise | rentable equipment marketplace"
              className="sm:-translate-x-9 sm:rotate-12 group-hover/animation:translate-x-0 group-hover/animation:rotate-0 transition-all duration-300 hover:scale-110"
            />
          </span>
        </span>
        {/* Other Projects */}
        <span className="flex flex-col sm:items-center sm:flex-row gap-2 mb-8">
          <h2 className="text-xl sm:text-2xl font-light">
            Aside from coding, I&apos;ve also worked on
          </h2>
          <span className="flex items-center gap-2 group/animation">
            <AppIcon
              href="https://www.instagram.com/tekkmekk.festival/"
              src="/images/tekkmekk-icon.webp"
              alt="me"
              tooltip="tekkmekk | music festival"
              className="sm:translate-x-3 sm:-rotate-12 group-hover/animation:translate-x-0 group-hover/animation:rotate-0 transition-all duration-300 hover:scale-110"
            />
            <AppIcon
              href="https://produceracademy.net/"
              src="/images/producer-academy-icon.webp"
              alt="me"
              tooltip="producer academy | music production school"
              className="sm:-translate-x-3 sm:rotate-12 group-hover/animation:translate-x-0 group-hover/animation:rotate-0 transition-all duration-300 hover:scale-110"
            />
            <AppIcon
              href="https://streamwear.shop/"
              src="/images/streamwear-icon.webp"
              alt="streamwear-icon"
              tooltip="streamwear | merchandise store"
              className="sm:-translate-x-9 sm:-rotate-12 group-hover/animation:translate-x-0 group-hover/animation:rotate-0 transition-all duration-300 hover:scale-110"
            />
          </span>
        </span>
        {/* Contact */}
        <span className="flex flex-col sm:items-center sm:flex-row gap-2">
          <h2 className="text-xl sm:text-2xl font-light">
            Feel free to contact me via
          </h2>
          <span className="flex items-center gap-2 group/animation">
            <AppIcon
              href="https://www.linkedin.com/in/julian-d%C3%BCrr/"
              src="/images/linkedin-icon.webp"
              alt="me"
              tooltip="@julian-dürr"
              className="sm:translate-x-3 sm:rotate-12 group-hover/animation:translate-x-0 group-hover/animation:rotate-0 transition-all duration-300 hover:scale-110"
            />
            <AppIcon
              href="mailto:julian.andreduerr@web.de"
              src="/images/mail-icon.webp"
              alt="me"
              tooltip="@julian.andreduerr@web.de"
              className="sm:-translate-x-3 sm:-rotate-12 group-hover/animation:translate-x-0 group-hover/animation:rotate-0 transition-all duration-300 hover:scale-110"
            />
            <AppIcon
              href="https://www.instagram.com/julian.sngr/"
              src="/images/instagram-icon.webp"
              alt="instagram-icon"
              tooltip="@julian.sngr"
              className="sm:-translate-x-9 sm:rotate-12 group-hover/animation:translate-x-0 group-hover/animation:rotate-0 transition-all duration-300 hover:scale-110"
            />
          </span>
        </span>
      </main>
    </div>
  );
}
