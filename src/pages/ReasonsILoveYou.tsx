import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";

const reasons = [
	"Your laugh makes my whole world brighter",
	"The way you scrunch your nose when you concentrate",
	"How you always know exactly what I'm thinking",
	"Aapki \"harkate\" - puts a smile on my face every time",
	"The way my heart races when I'm with you",
	"How you make ordinary moments feel magical",
	"The way you treat animals with love and kindness",
	"The way you talk about our future together",
	"How you remember the tiniest details about people",
	"Your beautiful smile that lights up any room",
	"The way you get excited about little things (happy dances!)",
	"How you make me want to be the best version of myself",
	"Your beautiful eyes that tell a thousand stories",
	"The way you care for others before yourself",
	"How you love me exactly as I am",
	"The way you snuggle closer in your sleep",
	"The way you make my empty apartment feel like home",
	"The way you support my dreams",
	"How you make me feel like the luckiest person alive",
	"The way you hold my hand like you never wanna let go",
	"How you believe in us even when times are tough",
	"Because you're you, and that's all that matters",
];

function getCircularPosition(idx: number, total: number, isMobile: boolean) {
	// Arrange cards in a circular spread, centered
	const angle = (2 * Math.PI * idx) / total;
	const radius = isMobile ? 38 : 220; // px
	const centerX = isMobile ? 50 : 50; // percent
	const centerY = isMobile ? 50 : 50; // percent
	const offsetX = Math.cos(angle) * radius;
	const offsetY = Math.sin(angle) * radius;
	return {
		left: `calc(${centerX}% + ${offsetX}px)`,
		top: `calc(${centerY}% + ${offsetY}px)`,
		transform: isMobile
			? "translate(-50%, -50%)"
			: "translate(-50%, -50%)"
	};
}

const ReasonsILoveYou = () => {
	const [visibleReasons, setVisibleReasons] = useState<number[]>([]);
	const [centerIdx, setCenterIdx] = useState(reasons.length - 1);
	const [animationDone, setAnimationDone] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	// Detect mobile
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth < 640);
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	// Reveal cards one by one at intervals
	useEffect(() => {
		if (visibleReasons.length < reasons.length) {
			const timeout = setTimeout(() => {
				setVisibleReasons((prev) => [...prev, prev.length]);
			}, 700);
			return () => clearTimeout(timeout);
		} else {
			setAnimationDone(true);
		}
	}, [visibleReasons.length]);

	// Card click handler for swapping
	const handleCardClick = (idx: number) => {
		if (!animationDone || idx === centerIdx) return;
		setCenterIdx(idx);
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/10 pt-20 relative overflow-hidden">
			<div className="max-w-6xl mx-auto px-2 sm:px-4 py-8">
				{/* Header */}
				<div className="text-center mb-12">
					<h1 className="font-script text-4xl md:text-6xl text-primary mb-4 animate-fade-in drop-shadow">
						22 Reasons I Love You
					</h1>
				</div>

				{/* Cards Layered in Circular Spread */}
				<div
					ref={containerRef}
					className="relative w-full flex items-center justify-center"
					style={{
						height: isMobile ? "480px" : "700px",
						maxHeight: isMobile ? "95vh" : undefined,
						overflow: "hidden",
						position: "relative",
					}}
				>
					{visibleReasons.map((idx) => {
						const isCenter = idx === centerIdx;
						const zIndex = isCenter ? 50 : idx + 1;
						const pos = isCenter
							? { left: "50%", top: "50%", transform: "translate(-50%, -50%)" }
							: getCircularPosition(idx, reasons.length, isMobile);
						const cardClass = isCenter
							? "center-card"
							: "reason-card";
						return (
							<Card
								key={idx}
								className={`absolute ${cardClass} animate-reason-fade transition-all duration-500 rounded-2xl cursor-pointer`}
								style={{
									...pos,
									zIndex,
									width: isCenter
										? isMobile
											? "80vw"
											: "370px"
										: isMobile
											? "48vw"
											: "210px",
									minHeight: isCenter
										? isMobile
											? "90px"
											: "200px"
										: isMobile
											? "48px"
											: "100px",
									animationDelay: `${0.2 + idx * 0.15}s`,
									boxShadow: isCenter
										? "0 12px 48px 0 rgba(0,0,0,0.38)"
										: "0 4px 16px 0 rgba(0,0,0,0.18)",
									fontWeight: isCenter ? 700 : 500,
									fontSize: isCenter
										? isMobile
											? "1rem"
											: "1.45rem"
										: isMobile
											? "0.85rem"
											: "1rem",
									padding: isCenter
										? isMobile
											? "0.8rem 0.5rem"
											: "2.5rem 1.7rem"
										: isMobile
											? "0.4rem 0.3rem"
											: "1rem 0.7rem",
									transition: "all 0.4s cubic-bezier(.4,0,.2,1)",
									background: "linear-gradient(120deg, #23232b 0%, #18181f 100%)",
									border: isCenter ? "2px solid #ffb6d5" : "1px solid #23232b",
									color: isCenter ? "#ffe6f2" : "#eaeaea",
									textShadow: isCenter ? "0 2px 12px #18181f" : undefined,
									overflowWrap: "break-word",
									wordBreak: "break-word",
								}}
								onClick={() => handleCardClick(idx)}
							>
								<div className="w-full text-center break-words">
									{reasons[idx]}
								</div>
							</Card>
						);
					})}
				</div>

				{/* Completion Message */}
				{animationDone && (
					<div className="text-center mt-16">
						<Card className="max-w-xl mx-auto bg-gradient-to-br from-primary/10 via-card/90 to-accent/10 backdrop-blur-lg border-0 shadow-2xl rounded-3xl">
							<div className="p-10">
								<h2 className="font-script text-2xl text-primary mb-4 drop-shadow">
									And there are countless more...
								</h2>
								<p className="text-lg text-foreground leading-relaxed">
									Every single day, I discover new reasons to love you.
									<br />
									14324!{" "}
									<span className="text-accent">💕</span>
								</p>
								<p className="mt-6 text-muted-foreground text-base">
									Tap any reason to bring it to the center!
								</p>
							</div>
						</Card>
					</div>
				)}
			</div>

			{/* Background hearts with blur/glow */}
			<div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
				{[...Array(15)].map((_, i) => (
					<span
						key={`bg-heart-${i}`}
						className="absolute text-primary/10 blur-[2px] drop-shadow-lg"
						style={{
							left: `${(i * 7) % 100}%`,
							top: `${(i * 11) % 100}%`,
							fontSize: `${44 + i * 4}px`,
							animation: `fadeInBgHeart 2s ${i * 0.5}s both`,
						}}
					>
						{/* Unicode heart for lightweight background */}
						&#10084;
					</span>
				))}
			</div>

			<style jsx>{`
				.reason-card {
					transition: box-shadow 0.3s, transform 0.3s;
					cursor: pointer;
				}
				.center-card {
					transition: box-shadow 0.4s, transform 0.4s;
					cursor: pointer;
					background: linear-gradient(120deg, #23232b 0%, #18181f 100%);
					border: 2px solid #ffb6d5;
					color: #ffe6f2;
					text-shadow: 0 2px 12px #18181f;
				}
				.animate-reason-fade {
					animation: reasonPopIn 0.6s cubic-bezier(0.5, 1.5, 0.5, 1) both;
				}
				@keyframes reasonPopIn {
					0% {
						opacity: 0;
						transform: scale(0.7) translateY(40px);
						filter: blur(6px);
					}
					60% {
						opacity: 1;
						transform: scale(1.08) translateY(-6px);
						filter: blur(0px);
					}
					80% {
						transform: scale(0.97) translateY(2px);
					}
					100% {
						opacity: 1;
						transform: scale(1) translateY(0);
						filter: blur(0px);
					}
				}
				.animate-fade-in {
					animation: fadeIn 1s ease;
				}
				@keyframes fadeIn {
					from { opacity: 0; }
					to { opacity: 1; }
				}
				@keyframes fadeInBgHeart {
					from { opacity: 0; }
					to { opacity: 0.5; }
				}
			`}</style>
		</div>
	);
};

export default ReasonsILoveYou;