import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Sparkles, Palette } from 'lucide-react';
import confetti from 'canvas-confetti';

const Index = () => {
  const [particleCount, setParticleCount] = useState(50);
  const [particleSize, setParticleSize] = useState(10);

  const triggerConfetti = () => {
    confetti({
      particleCount,
      spread: 70,
      origin: { y: 0.6 },
      scalar: particleSize / 10,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 to-indigo-600 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-white mb-8">Hip Confetti App</h1>
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
        <div className="mb-6">
          <Label htmlFor="particleCount" className="text-lg font-semibold mb-2 block">
            Particle Count: {particleCount}
          </Label>
          <Slider
            id="particleCount"
            min={10}
            max={200}
            step={10}
            value={[particleCount]}
            onValueChange={(value) => setParticleCount(value[0])}
            className="mb-4"
          />
        </div>
        <div className="mb-6">
          <Label htmlFor="particleSize" className="text-lg font-semibold mb-2 block">
            Particle Size: {particleSize}
          </Label>
          <Slider
            id="particleSize"
            min={5}
            max={20}
            step={1}
            value={[particleSize]}
            onValueChange={(value) => setParticleSize(value[0])}
            className="mb-4"
          />
        </div>
        <Button 
          onClick={triggerConfetti}
          className="w-full bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white font-bold py-3 rounded-full transition-all duration-300 transform hover:scale-105"
        >
          <Sparkles className="mr-2 h-5 w-5" />
          Explode Confetti!
        </Button>
      </div>
      <p className="mt-8 text-white text-opacity-80 flex items-center">
        <Palette className="mr-2 h-5 w-5" />
        Customize and enjoy your confetti explosion!
      </p>
    </div>
  );
};

export default Index;
