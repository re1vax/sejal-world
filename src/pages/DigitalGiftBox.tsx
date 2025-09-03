import { useState, useRef } from "react";
import { Gift, Heart, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// 10 Spotify playlist embed URLs
const playlists = [
	"https://open.spotify.com/embed/playlist/1cXxBOVRFGwTwYo9Ek0kg0",
	"https://open.spotify.com/embed/playlist/4agoHvUwtaCfpKXVsZfkHx",
	"https://open.spotify.com/embed/playlist/1H6N1PAphPEae3wKycnxMc",
	"https://open.spotify.com/embed/playlist/1rjxC0vvwpcyjd8I8NONir",
	"https://open.spotify.com/embed/playlist/3sbMOH9f5iUooJdqdCLIKh",
	"https://open.spotify.com/embed/playlist/4WnHX4FcFetfA2upO49q3L",
	"https://open.spotify.com/embed/playlist/7hPVVoxxE7W1djub1h2755",
	"https://open.spotify.com/embed/playlist/1W8YAPDyOv7eAOSEuso6qi",
	"https://open.spotify.com/embed/playlist/41YN7bfFla9kZOV03fqooz",
	"https://open.spotify.com/embed/playlist/1GAUCUCO4YsqxYRwSliDh6",
	"https://open.spotify.com/embed/playlist/7z5ZADUUrOHvZTO9Ch7zv9",
	"https://open.spotify.com/embed/playlist/5ZLHDN7UKcGVgyBFxo8KzS",
	"https://open.spotify.com/embed/playlist/4N7ekLDV90OgiBNng0IlDy",
	"https://open.spotify.com/embed/playlist/7sP1o8zQgP117gHVGRVVxi",
	"https://open.spotify.com/embed/playlist/4kCRPxgzfvPFKxrIizxqD3",
	"https://open.spotify.com/embed/playlist/2DW4mjBnXdsxt0THqYQbCP",
	"https://open.spotify.com/embed/playlist/1FrqEG3Oit9Fq25UOELprY",
	"https://open.spotify.com/embed/playlist/3AFvccacBtJovhkvpjtHzM",
	"https://open.spotify.com/embed/playlist/5wLmPMCMHennXjMDnhUtBr",
	"https://open.spotify.com/embed/playlist/3HTogxNEEQE6HXME8mDZLn",
	"https://open.spotify.com/embed/playlist/0gy2JpPXehYMcmef6TmMCm",
	"https://open.spotify.com/embed/playlist/27ccjfH9SzlBlz2ac7AtHq",
];

const DigitalGiftBox = () => {
	const [isOpened, setIsOpened] = useState(false);
	const [boxAnim, setBoxAnim] = useState(false);
	const [showSparkleBurst, setShowSparkleBurst] = useState(false);
	const confettiRef = useRef<HTMLDivElement>(null);

	const openGift = () => {
		setBoxAnim(true);
		setTimeout(() => {
			setIsOpened(true);
			setShowSparkleBurst(true);
			// Confetti burst
			if (confettiRef.current) {
				confettiRef.current.classList.add("confetti-burst");
				setTimeout(
					() => confettiRef.current?.classList.remove("confetti-burst"),
					1200
				);
			}
			setTimeout(() => setShowSparkleBurst(false), 1200);
		}, 900);
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 pt-20 px-4 relative">
			<div className="max-w-4xl mx-auto py-8">
				{/* Header */}
				<div className="text-center mb-12">
					<h1 className="font-script text-4xl md:text-6xl text-primary mb-4 animate-fade-in">
						A Little Something For You
					</h1>
					<p className="text-lg text-muted-foreground">
						Click the box to unwrap your surprise 🎁
					</p>
				</div>

				<div className="flex justify-center">
					{!isOpened ? (
						<div className="relative">
							<Button
								onClick={openGift}
								className={`group relative w-64 h-64 rounded-lg bg-gradient-to-br from-primary to-accent hover:from-primary/90 hover:to-accent/90 border-0 romantic-shadow hover:glow-shadow transition-all duration-500 hover:scale-105
                  ${boxAnim ? "animate-box-open" : ""}`}
								style={{
									pointerEvents: boxAnim ? "none" : "auto",
								}}
							>
								<div className="relative z-10">
									<Gift
										className={`w-24 h-24 text-white transition-transform duration-300 ${
											boxAnim ? "animate-gift-rotate" : "group-hover:rotate-12"
										}`}
									/>
									<div className="mt-4 text-white font-script text-xl">
										Click to Open
									</div>
								</div>
								{/* Animated ribbon */}
								<div className="absolute inset-x-0 top-1/2 h-8 bg-accent/30 backdrop-blur-sm transform -translate-y-1/2" />
								<div className="absolute inset-y-0 left-1/2 w-8 bg-accent/30 backdrop-blur-sm transform -translate-x-1/2" />
								{/* Sparkles around the box */}
								{[...Array(8)].map((_, i) => (
									<Sparkles
										key={i}
										className="absolute text-white/60 animate-pulse-soft"
										size={16}
										style={{
											top: `${20 + i * 8}%`,
											left: `${15 + (i % 2) * 70}%`,
											animationDelay: `${i * 0.2}s`,
										}}
									/>
								))}
							</Button>
							{/* Confetti burst */}
							<div
								ref={confettiRef}
								className="absolute inset-0 pointer-events-none z-20"
							>
								{[...Array(30)].map((_, i) => (
									<div
										key={i}
										className="confetti"
										style={{
											left: `${Math.random() * 100}%`,
											top: "50%",
											background: `hsl(${Math.random() * 360},80%,60%)`,
											animationDelay: `${i * 0.03}s`,
										}}
									/>
								))}
							</div>
							{/* Sparkle burst */}
							{showSparkleBurst && (
								<div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
									{[...Array(18)].map((_, i) => (
										<Sparkles
											key={i}
											className="sparkle-burst"
											size={32 + Math.random() * 16}
											style={{
												position: "absolute",
												left: "50%",
												top: "50%",
												transform: `translate(-50%, -50%) rotate(${i * 20}deg)`,
												animationDelay: `${i * 0.05}s`,
											}}
										/>
									))}
								</div>
							)}
						</div>
					) : (
						<div className="w-full max-w-3xl relative">
							{/* Shimmer background */}
							<div className="absolute inset-0 -z-10 shimmer-bg pointer-events-none" />
							{/* Clean message */}
							<div className="text-center mb-8 animate-fade-in">
								<p className="font-script text-2xl text-primary mb-2">
									Curated these playlists for us - some you have heard before, some you haven't. I hope you like them!
								</p>
								<p className="font-script text-l text-primary mb-2">
									While embedding these here, I realized I have made 18 playlists for you. Aap agar apne 4 playlists dedo toh 22 ho jayenge 👉👈
								</p>
								<p className="font-script text-l text-primary mb-2">
									In hindsight, jo tumhara hai wo mera hai sooooo.... I took the liberty :D
								</p>
							</div>
							{/* Spotify Playlists */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
								{playlists.map((url, idx) => (
									<Card
										key={idx}
										className="romantic-shadow border-primary/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-playlist-pop"
										style={{
											animationDelay: `${0.3 + idx * 0.13}s`,
										}}
									>
										<CardContent className="p-4 flex flex-col items-center">
											<iframe
												src={url}
												width="100%"
												height="152"
												allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
												loading="lazy"
												className="rounded-lg"
											></iframe>
											<p className="mt-2 text-primary font-script text-lg text-center">
												Playlist {idx + 1}
											</p>
										</CardContent>
									</Card>
								))}
							</div>
						</div>
					)}
				</div>

				{/* Floating particles */}
				{isOpened && (
					<div className="fixed inset-0 pointer-events-none overflow-hidden">
						{[...Array(20)].map((_, i) => (
							<div
								key={i}
								className="absolute animate-float"
								style={{
									left: `${Math.random() * 100}%`,
									top: `${Math.random() * 100}%`,
									animationDelay: `${i * 0.1}s`,
									animationDuration: `${3 + Math.random() * 2}s`,
								}}
							>
								{i % 3 === 0 ? (
									<Heart
										className="text-primary/30"
										size={12 + Math.random() * 8}
									/>
								) : i % 3 === 1 ? (
									<Sparkles
										className="text-accent/30"
										size={12 + Math.random() * 8}
									/>
								) : (
									<Star
										className="text-secondary/30"
										size={12 + Math.random() * 8}
									/>
								)}
							</div>
						))}
					</div>
				)}
			</div>
			{/* Animations */}
			<style jsx>{`
				.animate-box-open {
					animation: boxOpenAnim 0.9s cubic-bezier(0.4, 0, 0.2, 1) forwards;
				}
				@keyframes boxOpenAnim {
					0% {
						transform: scale(1) rotate(0deg);
						opacity: 1;
						box-shadow: 0 0 0 0 rgba(255,255,255,0.2);
					}
					60% {
						transform: scale(1.1) rotate(-8deg);
						box-shadow: 0 0 32px 8px rgba(255,255,255,0.3);
					}
					80% {
						transform: scale(0.95) rotate(8deg);
						box-shadow: 0 0 48px 16px rgba(255,255,255,0.4);
					}
					100% {
						transform: scale(0.7) rotate(-12deg);
						opacity: 0;
						box-shadow: 0 0 64px 32px rgba(255,255,255,0.5);
					}
				}
				.animate-gift-rotate {
					animation: giftRotateAnim 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
				}
				@keyframes giftRotateAnim {
					0% {
						transform: rotate(0deg);
					}
					100% {
						transform: rotate(24deg);
					}
				}
				.confetti {
					position: absolute;
					width: 10px;
					height: 18px;
					border-radius: 2px;
					opacity: 0;
				}
				.confetti-burst .confetti {
					animation: confettiAnim 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
				}
				@keyframes confettiAnim {
					0% {
						opacity: 1;
						transform: translateY(0) scale(1) rotate(0deg);
					}
					80% {
						opacity: 1;
					}
					100% {
						opacity: 0;
						transform: translateY(-120px) scale(1.2) rotate(360deg);
					}
				}
				.sparkle-burst {
					animation: sparkleBurstAnim 1.1s cubic-bezier(0.4,0,0.2,1) forwards;
				}
				@keyframes sparkleBurstAnim {
					0% { opacity: 0; transform: scale(0.2) translateY(0);}
					30% { opacity: 1; transform: scale(1.1) translateY(-24px);}
					70% { opacity: 1; transform: scale(1) translateY(-40px);}
					100% { opacity: 0; transform: scale(0.8) translateY(-80px);}
				}
				.shimmer-bg {
					background: linear-gradient(120deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0.08) 100%);
					animation: shimmerMove 2.5s linear infinite;
				}
				@keyframes shimmerMove {
					0% { background-position: 0% 50%; }
					100% { background-position: 100% 50%; }
				}
				.animate-playlist-pop {
					animation: playlistPopAnim 0.8s cubic-bezier(0.5,1.8,0.2,1) both;
					box-shadow: 0 0 0 0 rgba(255, 192, 203, 0.3);
				}
				@keyframes playlistPopAnim {
					0% {
						opacity: 0;
						transform: scale(0.7) translateY(40px);
						box-shadow: 0 0 0 0 rgba(255, 192, 203, 0.3);
					}
					60% {
						opacity: 1;
						transform: scale(1.12) translateY(-8px);
						box-shadow: 0 0 48px 16px rgba(255, 192, 203, 0.18);
					}
					100% {
						opacity: 1;
						transform: scale(1) translateY(0);
						box-shadow: 0 0 0 0 rgba(255, 192, 203, 0.0);
					}
				}
				.animate-gift-reveal {
					animation: fadeInScale 0.8s cubic-bezier(0.4, 0, 0.2, 1);
				}
				@keyframes fadeInScale {
					0% {
						opacity: 0;
						transform: scale(0.95);
					}
					100% {
						opacity: 1;
						transform: scale(1);
					}
				}
				.animate-fade-in {
					animation: fadeIn 1s ease;
				}
				@keyframes fadeIn {
					from {
						opacity: 0;
					}
					to {
						opacity: 1;
					}
				}
			`}</style>
		</div>
	);
};

export default DigitalGiftBox;