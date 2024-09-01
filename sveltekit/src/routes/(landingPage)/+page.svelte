<script lang="ts">
	import * as m from '$lib/paraglide/messages.js'
	import { Icons } from '$lib/icons'

	const team1 = 'images/team-1-800x800.jpg'
	const team2 = 'images/team-2-800x800.jpg'
	const team3 = 'images/team-3-800x800.jpg'
	const team4 = 'images/team-4-470x470.png'
</script>

<svelte:head>
	<title>{m.homepage_head()}</title>
</svelte:head>

<main>
	<div class="relative flex min-h-[75vh] content-center items-center justify-center pb-32 pt-16">
		<div
			class="absolute top-0 h-full w-full bg-cover bg-center"
			style="
				background-image: url(https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80);
			"
		>
			<span id="blackOverlay" class="absolute h-full w-full bg-black opacity-75" />
		</div>
		<div class="container relative mx-auto">
			<div class="flex flex-wrap items-center">
				<div class="ml-auto mr-auto w-full px-4 text-center lg:w-6/12">
					<div class="pr-12">
						<h1 class="text-5xl font-semibold text-white">Your story starts with us.</h1>
						<p class="mt-4 text-lg text-slate-200">
							This is a simple example of a Landing Page you can build using Notus Svelte. It
							features multiple CSS components based on the Tailwind CSS design system.
						</p>
					</div>
				</div>
			</div>
		</div>
		<div
			class="pointer-events-none absolute -bottom-[1px] left-0 right-0 top-auto h-[70px] w-full overflow-hidden"
			style="transform: translateZ(0);"
		>
			<svg
				class="absolute bottom-0 overflow-hidden"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="none"
				version="1.1"
				viewBox="0 0 2560 100"
				x="0"
				y="0"
			>
				<polygon class="fill-current text-zinc-200" points="2560 0 2560 100 0 100" />
			</svg>
		</div>
	</div>

	<section class="-mt-24 bg-zinc-200 pb-20" id="awards">
		<div class="container mx-auto px-4">
			<div class="flex flex-wrap">
				<div class="w-full px-4 pt-6 text-center md:w-4/12 lg:pt-12">
					<div
						class="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg"
					>
						<div class="flex-auto px-4 py-5">
							<div
								class="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-400 p-3 text-center text-white shadow-lg"
							>
								<i class="fas fa-award" />
							</div>
							<h6 class="text-xl font-semibold">Awarded Agency</h6>
							<p class="mb-4 mt-2 text-zinc-500">
								Divide details about your product or agency work into parts. A paragraph describing
								a feature will be enough.
							</p>
						</div>
					</div>
				</div>

				<div class="w-full px-4 text-center md:w-4/12">
					<div
						class="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg"
					>
						<div class="flex-auto px-4 py-5">
							<div
								class="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400 p-3 text-center text-white shadow-lg"
							>
								<i class="fas fa-retweet" />
							</div>
							<h6 class="text-xl font-semibold">Free Revisions</h6>
							<p class="mb-4 mt-2 text-zinc-500">
								Keep you user engaged by providing meaningful information. Remember that by this
								time, the user is curious.
							</p>
						</div>
					</div>
				</div>

				<div class="w-full px-4 pt-6 text-center md:w-4/12">
					<div
						class="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg"
					>
						<div class="flex-auto px-4 py-5">
							<div
								class="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400 p-3 text-center text-white shadow-lg"
							>
								<i class="fas fa-fingerprint" />
							</div>
							<h6 class="text-xl font-semibold">Verified Company</h6>
							<p class="mb-4 mt-2 text-zinc-500">
								Write a few lines about each one. A paragraph describing a feature will be enough.
								Keep you user engaged!
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="mt-32 flex flex-wrap items-center">
				<div class="ml-auto mr-auto w-full px-4 md:w-5/12">
					<div
						class="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center text-zinc-500 shadow-lg"
					>
						<i class="fas fa-user-friends text-xl" />
					</div>
					<h3 class="mb-2 text-3xl font-semibold leading-normal">Working with us is a pleasure</h3>
					<p class="mb-4 mt-4 text-lg font-light leading-relaxed text-zinc-600">
						Don't let your uses guess by attaching tooltips and popoves to any element. Just make
						sure you enable them first via JavaScript.
					</p>
					<p class="mb-4 mt-0 text-lg font-light leading-relaxed text-zinc-600">
						The kit comes with three pre-built pages to help you get started faster. You can change
						the text and images and you're good to go. Just make sure you enable them first via
						JavaScript.
					</p>
					<a href="/" class="mt-8 font-bold text-zinc-700"> Check Notus Svelte! </a>
				</div>

				<div class="ml-auto mr-auto w-full px-4 md:w-4/12">
					<div
						class="relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg bg-red-400 shadow-lg"
					>
						<img
							alt="..."
							src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
							class="w-full rounded-t-lg align-middle"
						/>
						<blockquote class="relative mb-4 p-8">
							<svg
								preserveAspectRatio="none"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 583 95"
								class="absolute -top-[94px] left-0 block h-[95px] w-full"
							>
								<polygon points="-30,95 583,95 583,65" class="fill-current text-red-400" />
							</svg>
							<h4 class="text-xl font-bold text-white">Top Notch Services</h4>
							<p class="text-md mt-2 font-light text-white">
								The Arctic Ocean freezes every winter and much of the sea-ice then thaws every
								summer, and that process will continue whatever happens.
							</p>
						</blockquote>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="relative py-20" id="about">
		<div
			class="pointer-events-none absolute bottom-auto left-0 right-0 top-[1px] -mt-20 h-20 w-full overflow-hidden"
			style="transform: translateZ(0);"
		>
			<svg
				class="absolute bottom-0 overflow-hidden"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="none"
				version="1.1"
				viewBox="0 0 2560 100"
				x="0"
				y="0"
			>
				<polygon class="fill-current text-white" points="2560 0 2560 100 0 100" />
			</svg>
		</div>

		<div class="container mx-auto px-4">
			<div class="flex flex-wrap items-center">
				<div class="ml-auto mr-auto w-full px-4 md:w-4/12">
					<img
						alt="..."
						class="max-w-full rounded-lg shadow-lg"
						src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
					/>
				</div>
				<div class="ml-auto mr-auto w-full px-4 md:w-5/12">
					<div class="md:pr-12">
						<div
							class="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-red-300 p-3 text-center text-red-600 shadow-lg"
						>
							<i class="fas fa-rocket text-xl" />
						</div>
						<h3 class="text-3xl font-semibold">A growing company</h3>
						<p class="mt-4 text-lg leading-relaxed text-zinc-500">
							The extension comes with three pre-built pages to help you get started faster. You can
							change the text and images and you're good to go.
						</p>
						<ul class="mt-6 list-none">
							<li class="py-2">
								<div class="flex items-center">
									<div>
										<span
											class="mr-3 inline-block rounded-full bg-red-200 px-2 py-1 text-xs font-semibold uppercase text-red-600"
										>
											<i class="fas fa-fingerprint" />
										</span>
									</div>
									<div>
										<h4 class="text-zinc-500">Carefully crafted components</h4>
									</div>
								</div>
							</li>
							<li class="py-2">
								<div class="flex items-center">
									<div>
										<span
											class="mr-3 inline-block rounded-full bg-red-200 px-2 py-1 text-xs font-semibold uppercase text-red-600"
										>
											<i class="fab fa-html5" />
										</span>
									</div>
									<div>
										<h4 class="text-zinc-500">Amazing page examples</h4>
									</div>
								</div>
							</li>
							<li class="py-2">
								<div class="flex items-center">
									<div>
										<span
											class="mr-3 inline-block rounded-full bg-red-200 px-2 py-1 text-xs font-semibold uppercase text-red-600"
										>
											<i class="far fa-paper-plane" />
										</span>
									</div>
									<div>
										<h4 class="text-zinc-500">Dynamic components</h4>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="pb-48 pt-20">
		<div class="container mx-auto px-4">
			<div class="mb-24 flex flex-wrap justify-center text-center">
				<div class="w-full px-4 lg:w-6/12">
					<h2 class="text-4xl font-semibold">Here are our heroes</h2>
					<p class="m-4 text-lg leading-relaxed text-zinc-500">
						According to the National Oceanic and Atmospheric Administration, Ted, Scambos,
						NSIDClead scentist, puts the potentially record maximum.
					</p>
				</div>
			</div>
			<div class="flex flex-wrap">
				<div class="mb-12 w-full px-4 md:w-6/12 lg:mb-0 lg:w-3/12">
					<div class="px-6">
						<img alt="..." src={team1} class="max-w-120-px mx-auto rounded-full shadow-lg" />
						<div class="pt-6 text-center">
							<h5 class="text-xl font-bold">Ryan Tompson</h5>
							<p class="mt-1 text-sm font-semibold uppercase text-zinc-400">Web Developer</p>
							<div class="mt-6">
								<button
									class="mb-1 mr-1 h-8 w-8 rounded-full bg-cyan-400 text-white outline-none focus:outline-none"
									type="button"
								>
									<Icons.twitter />
								</button>
								<button
									class="mb-1 mr-1 h-8 w-8 rounded-full bg-cyan-600 text-white outline-none focus:outline-none"
									type="button"
								>
									<i class="fab fa-facebook-f" />
								</button>
								<button
									class="mb-1 mr-1 h-8 w-8 rounded-full bg-pink-500 text-white outline-none focus:outline-none"
									type="button"
								>
									<i class="fab fa-dribbble" />
								</button>
							</div>
						</div>
					</div>
				</div>
				<div class="mb-12 w-full px-4 md:w-6/12 lg:mb-0 lg:w-3/12">
					<div class="px-6">
						<img alt="..." src={team2} class="max-w-120-px mx-auto rounded-full shadow-lg" />
						<div class="pt-6 text-center">
							<h5 class="text-xl font-bold">Romina Hadid</h5>
							<p class="mt-1 text-sm font-semibold uppercase text-zinc-400">Marketing Specialist</p>
							<div class="mt-6">
								<button
									class="mb-1 mr-1 h-8 w-8 rounded-full bg-red-600 text-white outline-none focus:outline-none"
									type="button"
								>
									<i class="fab fa-google" />
								</button>
								<button
									class="mb-1 mr-1 h-8 w-8 rounded-full bg-cyan-600 text-white outline-none focus:outline-none"
									type="button"
								>
									<i class="fab fa-facebook-f" />
								</button>
							</div>
						</div>
					</div>
				</div>
				<div class="mb-12 w-full px-4 md:w-6/12 lg:mb-0 lg:w-3/12">
					<div class="px-6">
						<img alt="..." src={team3} class="max-w-120-px mx-auto rounded-full shadow-lg" />
						<div class="pt-6 text-center">
							<h5 class="text-xl font-bold">Alexa Smith</h5>
							<p class="mt-1 text-sm font-semibold uppercase text-zinc-400">UI/UX Designer</p>
							<div class="mt-6">
								<button
									class="mb-1 mr-1 h-8 w-8 rounded-full bg-red-600 text-white outline-none focus:outline-none"
									type="button"
								>
									<i class="fab fa-google" />
								</button>
								<button
									class="mb-1 mr-1 h-8 w-8 rounded-full bg-cyan-400 text-white outline-none focus:outline-none"
									type="button"
								>
									<i class="fab fa-twitter" />
								</button>
								<button
									class="mb-1 mr-1 h-8 w-8 rounded-full bg-zinc-700 text-white outline-none focus:outline-none"
									type="button"
								>
									<i class="fab fa-instagram" />
								</button>
							</div>
						</div>
					</div>
				</div>
				<div class="mb-12 w-full px-4 md:w-6/12 lg:mb-0 lg:w-3/12">
					<div class="px-6">
						<img alt="..." src={team4} class="max-w-120-px mx-auto rounded-full shadow-lg" />
						<div class="pt-6 text-center">
							<h5 class="text-xl font-bold">Jenna Kardi</h5>
							<p class="mt-1 text-sm font-semibold uppercase text-zinc-400">Founder and CEO</p>
							<div class="mt-6">
								<button
									class="mb-1 mr-1 h-8 w-8 rounded-full bg-pink-500 text-white outline-none focus:outline-none"
									type="button"
								>
									<i class="fab fa-dribbble" />
								</button>
								<button
									class="mb-1 mr-1 h-8 w-8 rounded-full bg-red-600 text-white outline-none focus:outline-none"
									type="button"
								>
									<i class="fab fa-google" />
								</button>
								<button
									class="mb-1 mr-1 h-8 w-8 rounded-full bg-cyan-400 text-white outline-none focus:outline-none"
									type="button"
								>
									<i class="fab fa-twitter" />
								</button>
								<button
									class="mb-1 mr-1 h-8 w-8 rounded-full bg-zinc-700 text-white outline-none focus:outline-none"
									type="button"
								>
									<i class="fab fa-instagram" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="relative block bg-zinc-800 pb-20">
		<div
			class="pointer-events-none absolute bottom-auto left-0 right-0 top-0 -mt-20 h-20 w-full overflow-hidden"
			style="transform: translateZ(0);"
		>
			<svg
				class="absolute bottom-0 overflow-hidden"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="none"
				version="1.1"
				viewBox="0 0 2560 100"
				x="0"
				y="0"
			>
				<polygon class="fill-current text-zinc-800" points="2560 0 2560 100 0 100" />
			</svg>
		</div>

		<div class="container mx-auto px-4 lg:pb-64 lg:pt-24">
			<div class="flex flex-wrap justify-center text-center">
				<div class="w-full px-4 lg:w-6/12">
					<h2 class="text-4xl font-semibold text-white">Build something</h2>
					<p class="mb-4 mt-4 text-lg leading-relaxed text-zinc-400">
						Put the potentially record low maximum sea ice extent tihs year down to low ice.
						According to the National Oceanic and Atmospheric Administration, Ted, Scambos.
					</p>
				</div>
			</div>
			<div class="mt-12 flex flex-wrap justify-center">
				<div class="w-full px-4 text-center lg:w-3/12">
					<div
						class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white p-3 text-zinc-800 shadow-lg"
					>
						<i class="fas fa-medal text-xl" />
					</div>
					<h6 class="mt-5 text-xl font-semibold text-white">Excelent Services</h6>
					<p class="mb-4 mt-2 text-zinc-400">
						Some quick example text to build on the card title and make up the bulk of the card's
						content.
					</p>
				</div>
				<div class="w-full px-4 text-center lg:w-3/12">
					<div
						class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white p-3 text-zinc-800 shadow-lg"
					>
						<i class="fas fa-poll text-xl" />
					</div>
					<h5 class="mt-5 text-xl font-semibold text-white">Grow your market</h5>
					<p class="mb-4 mt-2 text-zinc-400">
						Some quick example text to build on the card title and make up the bulk of the card's
						content.
					</p>
				</div>
				<div class="w-full px-4 text-center lg:w-3/12">
					<div
						class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white p-3 text-zinc-800 shadow-lg"
					>
						<i class="fas fa-lightbulb text-xl" />
					</div>
					<h5 class="mt-5 text-xl font-semibold text-white">Launch time</h5>
					<p class="mb-4 mt-2 text-zinc-400">
						Some quick example text to build on the card title and make up the bulk of the card's
						content.
					</p>
				</div>
			</div>
		</div>
	</section>
	<section class="relative block bg-zinc-800 py-24 lg:pt-0">
		<div class="container mx-auto px-4">
			<div class="-mt-48 flex flex-wrap justify-center lg:-mt-64">
				<div class="w-full px-4 lg:w-6/12">
					<div
						class="relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg bg-zinc-200 shadow-lg"
					>
						<div class="flex-auto p-5 lg:p-10">
							<h4 class="text-2xl font-semibold">Want to work with us?</h4>
							<p class="mb-4 mt-1 leading-relaxed text-zinc-500">
								Complete this form and we will get back to you in 24 hours.
							</p>
							<div class="relative mb-3 mt-8 w-full">
								<label class="mb-2 block text-xs font-bold uppercase text-zinc-600" for="full-name">
									Full Name
								</label>
								<input
									id="full-name"
									type="text"
									class="w-full rounded border-0 bg-white px-3 py-3 text-sm text-zinc-600 placeholder-zinc-300 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
									placeholder="Full Name"
								/>
							</div>

							<div class="relative mb-3 w-full">
								<label class="mb-2 block text-xs font-bold uppercase text-zinc-600" for="email">
									Email
								</label>
								<input
									id="email"
									type="email"
									class="w-full rounded border-0 bg-white px-3 py-3 text-sm text-zinc-600 placeholder-zinc-300 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
									placeholder="Email"
								/>
							</div>

							<div class="relative mb-3 w-full">
								<label class="mb-2 block text-xs font-bold uppercase text-zinc-600" for="message">
									Message
								</label>
								<textarea
									id="message"
									rows="4"
									cols="80"
									class="w-full rounded border-0 bg-white px-3 py-3 text-sm text-zinc-600 placeholder-zinc-300 shadow focus:outline-none focus:ring"
									placeholder="Type a message..."
								/>
							</div>
							<div class="mt-6 text-center">
								<button
									class="mb-1 mr-1 rounded bg-zinc-800 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-zinc-600"
									type="button"
								>
									Send Message
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>

<footer class="footer footer-center bg-base-300 text-base-content p-4">
	<div>
		<p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
	</div>
</footer>
