import { Card, CardContent } from "@/components/ui/card"; import { Button } from "@/components/ui/button";

export default function Portfolio() { return ( <div className="min-h-screen bg-gray-950 text-white px-6 py-10 md:px-16"> <header className="mb-16"> <h1 className="text-4xl md:text-6xl font-bold">Moduu.io</h1> <p className="text-lg md:text-xl mt-2 text-gray-400"> Web3 Developer • Cybersecurity Advocate • Core Chain Contributor </p> </header>

<section className="grid md:grid-cols-2 gap-6 mb-16">
    <Card className="bg-gray-900 border-gray-800">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p>
          I’m Moduu — a Web3 builder passionate about decentralization,
          cybersecurity, and technical writing. I've contributed to
          Quranium, Core Chain, and the TON ecosystem.
        </p>
      </CardContent>
    </Card>

    <Card className="bg-gray-900 border-gray-800">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-2">Web3 Toolkit</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>CertiK Audit Practices</li>
          <li>TON MiniApp SDK</li>
          <li>Quranium Qsafe Wallet</li>
          <li>Telegram WebApp Dev</li>
          <li>GitHub, Markdown Docs</li>
        </ul>
      </CardContent>
    </Card>

    <Card className="bg-gray-900 border-gray-800">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-2">Projects</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Qsafe Wallet Documentation (Quranium)</li>
          <li>TON Community Ambassador & Dev Threads</li>
          <li>Core Chain: Staking/Yield Ecosystem</li>
          <li>Telegram Bots + Airdrop Tracking</li>
        </ul>
      </CardContent>
    </Card>

    <Card className="bg-gray-900 border-gray-800">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <p className="mb-2">moduudefii@gmail.com</p>
        <p className="mb-2">+234 806 280 6667</p>
        <div className="flex gap-4 mt-4">
          <a href="https://x.com/moduudefii" target="_blank" rel="noopener">
            <Button variant="outline">X (Twitter)</Button>
          </a>
          <a href="https://github.com/moduu6667" target="_blank" rel="noopener">
            <Button variant="outline">GitHub</Button>
          </a>
        </div>
      </CardContent>
    </Card>
  </section>

  <footer className="text-sm text-gray-600 text-center">
    Built with ❤️ by Moduu. Last updated July 2025.
  </footer>
</div>

); }

