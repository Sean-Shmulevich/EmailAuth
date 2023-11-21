import { c as create_ssr_component, i as escape, p as null_to_empty, b as add_attribute, o as each, v as validate_component } from "../../../../../chunks/index2.js";
import { I as ImageCropper } from "../../../../../chunks/ImageCropper.js";
import { B as Button, D as Dropdown } from "../../../../../chunks/Wrapper.js";
/* empty css                                                             */import { D as DropdownItem } from "../../../../../chunks/DropdownItem.js";
import { C as Chevron } from "../../../../../chunks/Chevron.js";
/* empty css                                                           */import "devalue";
import { g as goto } from "../../../../../chunks/navigation.js";
import { R as Radio$1 } from "../../../../../chunks/Radio.js";
const Checkboxes_svelte_svelte_type_style_lang = "";
const PreviewCard_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "@import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto:900');.nah.svelte-16zpl2f.svelte-16zpl2f{display:none}.interest.svelte-16zpl2f.svelte-16zpl2f{word-wrap:break-word}:root{--primary-color:#ff0050;--secondary-color:rgb(246, 244, 250);--background:linear-gradient(white, rgb(246, 244, 250))}#wrapper.svelte-16zpl2f.svelte-16zpl2f{display:flex;align-items:center;justify-content:center;width:100%;height:100%;margin-top:3vh}#container.svelte-16zpl2f.svelte-16zpl2f{display:flex;justify-content:center;width:47.25vh;height:84vh;overflow:hidden}.box.svelte-16zpl2f.svelte-16zpl2f{position:absolute;transform:translateY(100px);height:80vh;width:47.25vh;max-width:95vw}.boxcontent.svelte-16zpl2f.svelte-16zpl2f{position:absolute;width:90%;height:90%;margin:5%;background-color:var(--secondary-color);border-radius:1.5em;overflow:hidden;box-shadow:3px -3px 10px rgba(0, 0, 0, 0.5);cursor:grab;overflow:hidden}.box.svelte-16zpl2f:last-of-type .boxcontent.svelte-16zpl2f{width:100%;height:100%;margin:0%}.box.svelte-16zpl2f img.svelte-16zpl2f{width:100%;height:100%}.like.svelte-16zpl2f.svelte-16zpl2f,.nope.svelte-16zpl2f.svelte-16zpl2f{position:absolute;top:35px;border:4px solid gray;padding:7px;border-radius:5px;text-transform:uppercase;font-size:2.5em;font-weight:bold;font-family:'Roboto', sans-serif;opacity:0}.like.svelte-16zpl2f.svelte-16zpl2f{left:30px;border-color:green;color:green;transform:rotate(-20deg)}.nope.svelte-16zpl2f.svelte-16zpl2f{right:30px;border-color:red;color:red;transform:rotate(20deg)}.info.svelte-16zpl2f.svelte-16zpl2f{color:#fff;position:absolute;bottom:0px;left:0px;padding:30px 20px 20px 20px;width:100%;box-sizing:border-box;text-shadow:2px 2px 5px gray}.name.svelte-16zpl2f.svelte-16zpl2f{font-size:1.4em;font-weight:bold}.box.svelte-16zpl2f.svelte-16zpl2f{margin-bottom:60px}.border-text.svelte-16zpl2f.svelte-16zpl2f{color:white;text-shadow:-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000}",
  map: null
};
const PreviewCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { croppedImage } = $$props;
  let { showPreview } = $$props;
  let { title } = $$props;
  let { eventType } = $$props;
  let { shortDescription } = $$props;
  let { sportPreference } = $$props;
  let { location } = $$props;
  let { inPersonOrVirtual } = $$props;
  let { estimatedPayment } = $$props;
  let { endDate } = $$props;
  let { eventTypeCustom } = $$props;
  let { eventDate } = $$props;
  let { isCampaign } = $$props;
  let { recommendedDeliverables } = $$props;
  let { brandName } = $$props;
  let { currImage } = $$props;
  if ($$props.croppedImage === void 0 && $$bindings.croppedImage && croppedImage !== void 0)
    $$bindings.croppedImage(croppedImage);
  if ($$props.showPreview === void 0 && $$bindings.showPreview && showPreview !== void 0)
    $$bindings.showPreview(showPreview);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.eventType === void 0 && $$bindings.eventType && eventType !== void 0)
    $$bindings.eventType(eventType);
  if ($$props.shortDescription === void 0 && $$bindings.shortDescription && shortDescription !== void 0)
    $$bindings.shortDescription(shortDescription);
  if ($$props.sportPreference === void 0 && $$bindings.sportPreference && sportPreference !== void 0)
    $$bindings.sportPreference(sportPreference);
  if ($$props.location === void 0 && $$bindings.location && location !== void 0)
    $$bindings.location(location);
  if ($$props.inPersonOrVirtual === void 0 && $$bindings.inPersonOrVirtual && inPersonOrVirtual !== void 0)
    $$bindings.inPersonOrVirtual(inPersonOrVirtual);
  if ($$props.estimatedPayment === void 0 && $$bindings.estimatedPayment && estimatedPayment !== void 0)
    $$bindings.estimatedPayment(estimatedPayment);
  if ($$props.endDate === void 0 && $$bindings.endDate && endDate !== void 0)
    $$bindings.endDate(endDate);
  if ($$props.eventTypeCustom === void 0 && $$bindings.eventTypeCustom && eventTypeCustom !== void 0)
    $$bindings.eventTypeCustom(eventTypeCustom);
  if ($$props.eventDate === void 0 && $$bindings.eventDate && eventDate !== void 0)
    $$bindings.eventDate(eventDate);
  if ($$props.isCampaign === void 0 && $$bindings.isCampaign && isCampaign !== void 0)
    $$bindings.isCampaign(isCampaign);
  if ($$props.recommendedDeliverables === void 0 && $$bindings.recommendedDeliverables && recommendedDeliverables !== void 0)
    $$bindings.recommendedDeliverables(recommendedDeliverables);
  if ($$props.brandName === void 0 && $$bindings.brandName && brandName !== void 0)
    $$bindings.brandName(brandName);
  if ($$props.currImage === void 0 && $$bindings.currImage && currImage !== void 0)
    $$bindings.currImage(currImage);
  $$result.css.add(css$1);
  return `<div class="${escape(null_to_empty(showPreview ? "" : "nah"), true) + " svelte-16zpl2f"}">
	<h2${add_attribute("class", "text-3xl mt-4 text-center underline text-white", 0)}>Go back to create offer
	</h2>
	<div id="wrapper" class="svelte-16zpl2f"><div id="container" class="svelte-16zpl2f"><div class="box -mt-24 svelte-16zpl2f"><div class="boxcontent svelte-16zpl2f">${`${croppedImage ? `<img class="bg-gray-900 object-cover svelte-16zpl2f"${add_attribute("src", URL.createObjectURL(croppedImage), 0)} alt="Profile">` : `${currImage ? `<img class="bg-gray-900 object-contain svelte-16zpl2f"${add_attribute("src", currImage, 0)} alt="Profile">` : `<img class="bg-gray-900 object-cover svelte-16zpl2f" src="https://slimecars.com/assets/cardplaceholder.png" alt="Profile">`}`}
						<div class="info bg-black bg-opacity-70 rounded-xl svelte-16zpl2f"><div class="name -mt-5 svelte-16zpl2f">${escape(title)}</div>
							${isCampaign === "Single Event" ? `${eventTypeCustom ? `<p>${escape(eventTypeCustom)} event</p>` : `<p>${escape(eventType)} event</p>`}` : ``}
							<div class="interest svelte-16zpl2f">Brand: ${escape(brandName)}</div>
							${estimatedPayment ? `${JSON.parse(estimatedPayment)["pay"] === "Both" ? `${JSON.parse(estimatedPayment).product !== "" ? `<p>Product: ${escape(JSON.parse(estimatedPayment).product)}</p>` : ``}
									${JSON.parse(estimatedPayment).compSelected !== "Custom" ? `<p>Compensation: ${escape(JSON.parse(estimatedPayment).compSelected)}</p>` : `<p>Compensation: ${escape(JSON.parse(estimatedPayment).customPay)}</p>`}` : `${JSON.parse(estimatedPayment)["pay"] === "Money" ? `${JSON.parse(estimatedPayment).compSelected !== "Custom" ? `<p>Compensation: ${escape(JSON.parse(estimatedPayment).compSelected)}</p>` : `<p>Compensation: ${escape(JSON.parse(estimatedPayment).customPay)}</p>`}` : `${JSON.parse(estimatedPayment)["pay"] === "Product" ? `${JSON.parse(estimatedPayment).product !== "" ? `<p>Product: ${escape(JSON.parse(estimatedPayment).product)}</p>` : ``}` : ``}`}`}` : ``}
							${recommendedDeliverables ? `${each(recommendedDeliverables, (del, i) => {
    return `${del.title !== "" && del.value !== "" ? `<li class="">${escape(del.title)} <br>
										</li>` : ``}`;
  })}` : ``}</div>`}
					${``}
					${``}
					<div class="like svelte-16zpl2f">Like</div>
					<div class="nope svelte-16zpl2f">Nope</div>
					<div class="absolute top-0 bottom-0 left-0 flex items-center"><button class="w-full h-full px-3 py-3 bg-transparent text-gray-900 border-text text-2xl font-semibold hover:text-gray-300 transition-colors duration-200 svelte-16zpl2f">&lt;
						</button></div>

					<div class="absolute top-0 bottom-0 right-0 flex items-center"><button class="w-full h-full px-3 py-3 bg-transparent text-gray-900 border-text text-2xl font-semibold hover:text-gray-300 transition-colors duration-200 svelte-16zpl2f">&gt;
						</button></div></div>

				</div></div></div>
</div>`;
});
const DelData = {
  in_person_appearance: [
    {
      name: "Instagram Takeover",
      value: "Have the athletes take over your brand's Instagram account for a day. They can share behind-the-scenes footage, interact with followers, and announce their appearance at your store."
    },
    {
      name: "Story Shoutouts",
      value: "Athletes can post Instagram Stories promoting your store appearance, offering sneak peeks, and encouraging their followers to join them."
    },
    {
      name: "Live QA Session",
      value: "Host a live Q&A session on Instagram or another platform with the athletes. They can talk about your brand, their experience with your products, and invite their followers to the store appearance."
    },
    {
      name: "Challenge Or Contest",
      value: "Create a challenge or contest related to your brand, and have the athletes participate. They can challenge their followers to join, with the store appearance as one of the prizes."
    },
    {
      name: "YouTube Video Collaboration",
      value: "Work with the athletes to create a fun and engaging YouTube video that promotes your store appearance. This could be a vlog, a challenge video, or a review of your products."
    },
    {
      name: "TikTok Dance Or Challenge",
      value: "Have the athletes participate in a TikTok dance or challenge featuring your brand. TikTok's popularity among college students can help generate excitement about the store appearance."
    },
    {
      name: "Twitter QA Thread",
      value: "Organize a Twitter Q&A session with the athletes. They can answer questions from their followers about your brand and the upcoming store appearance."
    },
    {
      name: "Snapchat Geofilters",
      value: "Create custom Snapchat geofilters for your store appearance, featuring the athletes and your brand logo. Encourage attendees to use the filter during the event."
    },
    {
      name: "In Store Event Teasers",
      value: "The athletes can post short videos on social media, teasing what attendees can expect at the in-store appearance, such as giveaways, exclusive discounts, or product launches."
    },
    {
      name: "Influencer Codes",
      value: "Provide the athletes with unique discount codes they can share with their followers. This code can offer a discount on your products during the in-store appearance."
    },
    {
      name: "Facebook Event Page",
      value: "Create a Facebook event page for the store appearance and have the athletes invite their friends and followers to attend."
    },
    {
      name: "Instagram IGTV Series",
      value: "Collaborate with the athletes to create a series of IGTV videos leading up to the event, showcasing your products, and building anticipation."
    },
    {
      name: "Snapchat Instagram Stories Polls",
      value: "Use Stories polls to let the athletes' followers vote on aspects of the event, such as which products will be highlighted or which athlete they're most excited to meet."
    },
    {
      name: "Behind The Scenes Content",
      value: "Share behind-the-scenes photos and videos of the athletes preparing for the store appearance, giving followers a glimpse into their lives."
    },
    {
      name: "Instagram Reels Showcasing Products",
      value: "Create catchy Instagram Reels featuring the athletes using or endorsing your products, with information about the store appearance in the caption."
    }
  ],
  sponsored_post: [
    {
      name: "Sponsored Post",
      value: "Athletes can create regular sponsored posts on their social media profiles featuring your brand's products or services. These posts should showcase the athletes using or endorsing your offerings."
    },
    {
      name: "Product Reviews",
      value: "Ask the athletes to provide honest reviews of your products, either through posts or stories. Authentic reviews can influence their followers' purchasing decisions."
    },
    {
      name: "Giveaways and Contests",
      value: "Collaborate with athletes to host giveaways or contests on their social media platforms, encouraging followers to participate and engage with your brand."
    },
    {
      name: "Lifestyle Photos",
      value: "Have the athletes incorporate your products into their daily life and share lifestyle photos that highlight the products' usage and benefits."
    },
    {
      name: "Behind-the-Scenes Content",
      value: "Request behind-the-scenes glimpses of the athletes' training routines or daily life, with your brand's products subtly featured."
    },
    {
      name: "IGTV Series",
      value: "Create an IGTV series with the athletes, showcasing different aspects of your brand, products, or events. This helps create more engaging and informative content."
    },
    {
      name: "Reels or TikTok Videos",
      value: "Collaborate with athletes on short and creative Reels or TikTok videos that feature your products in entertaining ways."
    },
    {
      name: "Inspirational Stories",
      value: "Encourage athletes to share inspiring stories related to your brand's values or how your products have positively impacted their lives."
    },
    {
      name: "Incorporate Brand Hashtags",
      value: "Ask the athletes to include your brand's unique hashtags in their posts, helping to track engagement and reach."
    },
    {
      name: "Athlete Takeovers",
      value: "Allow athletes to take over your brand's social media accounts for a day, where they can interact with your audience and share their experiences with your products."
    },
    {
      name: "Branded Filters and Stickers",
      value: "Collaborate with athletes to create custom Snapchat or Instagram filters and stickers related to your brand, which they can use in their stories."
    },
    {
      name: "Day-in-the-Life Vlogs",
      value: "Work with athletes to create vlogs where they document a day in their life, featuring your brand's products and how they use them throughout the day."
    },
    {
      name: "Holiday or Seasonal Content",
      value: "Plan seasonal content with the athletes, such as special posts for holidays, back-to-school season, or sporting events, incorporating your brand."
    },
    {
      name: "Testimonials",
      value: "Have athletes share their positive experiences with your brand through written or video testimonials that can be shared on their profiles."
    },
    {
      name: "Caption Contests",
      value: "Run caption contests where athletes share a post featuring your brand, and their followers submit creative captions in the comments."
    }
  ],
  shoutouts: [
    {
      name: "Static Image Shoutout",
      value: "Athletes can post a static image featuring your brand's logo or products with a caption that promotes your products or upcoming events."
    },
    {
      name: "Product Endorsement",
      value: "Request athletes to create posts that endorse and recommend your products, highlighting their favorite features and benefits."
    },
    {
      name: "Story Shoutout",
      value: "Athletes can use Instagram or Snapchat Stories to give shoutouts, either through images or short videos, to draw attention to your brand."
    },
    {
      name: "Video Testimonials",
      value: "Have athletes film video testimonials expressing their positive experiences with your brand and products."
    },
    {
      name: "Athlete Challenges",
      value: "Encourage athletes to challenge their followers to engage with your brand, like tagging friends or sharing their own experiences with your products."
    },
    {
      name: "Live Shoutouts",
      value: "During live streams, athletes can give shoutouts to your brand and answer questions from viewers about your products."
    },
    {
      name: "Giveaway Promotions",
      value: "Collaborate with athletes to announce giveaways featuring your products, encouraging their followers to participate and engage with your brand."
    },
    {
      name: "Caption Contests",
      value: "Have athletes share posts featuring your brand, and their followers can submit creative captions to win prizes or discounts."
    },
    {
      name: "Event Promotions",
      value: "If you have upcoming events or promotions, athletes can use their platform to announce and promote them."
    },
    {
      name: "In-Game/On-Field Shoutouts",
      value: "If the athletes compete in sports, request them to give shoutouts to your brand during games or practices."
    },
    {
      name: "Exclusive Discounts",
      value: "Provide athletes with exclusive discount codes to share with their followers, creating a sense of urgency and reward for their audience."
    },
    {
      name: "Reposts of Fan Content",
      value: "Encourage athletes to repost content from their followers that features your brand or products."
    },
    {
      name: "Holiday or Seasonal Posts",
      value: "Plan special shoutouts for holidays or seasonal events, incorporating your brand into the celebrations."
    },
    {
      name: "Incorporate Brand Hashtags",
      value: "Ask athletes to include your brand's hashtags in their posts to increase visibility and engagement."
    },
    {
      name: "Behind-the-Scenes Content",
      value: "Request behind-the-scenes footage of athletes using or preparing for events while showcasing your brand."
    },
    {
      name: "Video Recording Shoutout",
      value: "Ask athletes to record a video shouting out your brand."
    }
  ],
  autographs: [
    {
      name: "Digital Autograph Giveaway",
      value: "Collaborate with athletes to host a digital autograph giveaway on their social media platforms. Followers can enter the contest for a chance to win a personalized digital autograph from the athlete."
    },
    {
      name: "Signed Merchandise Giveaway",
      value: "Have athletes sign branded merchandise (e.g., clothing, sports equipment) and run a giveaway on their social media, enticing their followers to participate and engage with your brand."
    },
    {
      name: "Autograph Requests for Followers",
      value: "Athletes can invite their followers to request a digital autograph by commenting on a specific post or sending direct messages. This creates a sense of exclusivity and engagement."
    },
    {
      name: "Live Autograph Sessions",
      value: "Schedule live autograph sessions where athletes go live on platforms like Instagram or TikTok, signing digital autographs for fans who tune in."
    },
    {
      name: "Autograph Request Submissions",
      value: "Create a designated page or link where fans can submit autograph requests. Athletes can then respond with personalized digital autographs."
    },
    {
      name: "Behind-the-Scenes Autographing",
      value: "Document behind-the-scenes footage of athletes signing autographs for your brand and share it as a teaser on social media before the official autograph release."
    },
    {
      name: "Limited Edition Digital Autographs",
      value: "Release a limited number of digital autographs signed by the athletes, creating a sense of scarcity and driving higher engagement and participation."
    },
    {
      name: "Autograph Reveal Teasers",
      value: "Tease the release of upcoming autographs by sharing snippets of the athletes signing or showing glimpses of the final autograph design."
    },
    {
      name: "Collaborative Autographs",
      value: "Partner with athletes to create collaborative autographs that incorporate your brand's logo or elements, making them exclusive to your marketing campaign."
    },
    {
      name: "Personalized Social Media Posts",
      value: "Athletes can post images or videos holding autographed merchandise, showing off the personalized autographs they will be providing for fans."
    },
    {
      name: "Story Highlights",
      value: "Create dedicated Story Highlights on athletes' Instagram profiles showcasing past autograph sessions and highlighting upcoming opportunities for fans."
    },
    {
      name: "Autograph Announcement Videos",
      value: "Collaborate with athletes to produce short videos announcing the autograph giveaway, generating excitement and anticipation."
    },
    {
      name: "Thank-You Autographs",
      value: "Athletes can express gratitude to their fans and followers by posting thank-you autographs, spreading positive sentiments about your brand."
    },
    {
      name: "Autograph Reaction Videos",
      value: "Encourage fans to share their reactions after receiving a digital autograph from an athlete, fostering a sense of community and excitement around your brand."
    },
    {
      name: "Autograph Printables",
      value: "Create printable digital autographs that fans can download and print, encouraging them to showcase their autographs proudly."
    }
  ],
  in_person_appearance_activities: [
    {
      name: "Meet and Greet",
      value: "Have athletes greet customers and fans at your store, taking photos and signing autographs."
    },
    {
      name: "Product Demonstrations",
      value: "Request athletes to demonstrate how to use and showcase your brand's products to customers."
    },
    {
      name: "Live Q&A Session",
      value: "Host a live Q&A session with athletes at your store, where customers can ask questions about the athletes' experiences and your brand."
    },
    {
      name: "In-Store Workouts",
      value: "If relevant to your brand, arrange in-store workouts led by the athletes, encouraging customers to participate."
    },
    {
      name: "Friendly Competitions",
      value: "Organize fun, sports-related competitions at your store, with athletes participating alongside customers."
    },
    {
      name: "Brand Ambassador Interaction",
      value: "Have athletes engage with your brand ambassadors, influencers, or key customers during the event."
    },
    {
      name: "Fashion Show",
      value: "If your brand involves apparel or merchandise, arrange a fashion show featuring athletes as models."
    },
    {
      name: "Limited-Edition Merchandise Launch",
      value: "Launch exclusive, limited-edition merchandise in collaboration with the athletes, creating excitement for the event."
    },
    {
      name: "Raffle Drawings",
      value: "Collaborate with athletes to host raffle drawings, giving customers the chance to win signed merchandise or other prizes."
    },
    {
      name: "Charity Events",
      value: "Organize charity events at your store with the athletes' involvement, supporting a cause aligned with your brand's values."
    },
    {
      name: "Social Media Challenges",
      value: "Encourage athletes to create in-store social media challenges, where customers participate and share their experiences online."
    },
    {
      name: "Panel Discussions",
      value: "Host panel discussions or workshops at your store, where athletes share insights into their sports, fitness, and your brand."
    },
    {
      name: "Giveaways and Swag Bags",
      value: "Distribute branded swag bags or giveaways to customers attending the event, which could include autographed merchandise or exclusive items."
    },
    {
      name: "Healthy Snack Stations",
      value: "If your brand promotes health and wellness, set up healthy snack stations with the athletes' favorite snacks."
    },
    {
      name: "Customization Stations",
      value: "Have athletes participate in customizing products for customers, adding a personal touch to their purchases."
    }
  ],
  marketing_campaign: [
    {
      name: "Meet-and-Greet Sessions",
      value: "Organize meet-and-greet sessions where customers can meet the athletes, take photos, and receive autographs."
    },
    {
      name: "In-Store Demonstrations",
      value: "Have athletes demonstrate the use of your products or showcase their skills related to your brand's offerings."
    },
    {
      name: "Interactive Games or Challenges",
      value: "Collaborate with athletes to host interactive games or challenges that customers can participate in for a chance to win prizes."
    },
    {
      name: "Panel Discussions or Q&A Sessions",
      value: "Host panel discussions or Q&A sessions with the athletes, where they share their experiences and insights related to your brand."
    },
    {
      name: "Social Media Contests",
      value: "Encourage customers to participate in social media contests during the event, where they can share posts featuring your brand and athletes to win rewards."
    },
    {
      name: "Product Endorsements",
      value: "Have athletes endorse your products in person, explaining why they love and recommend them."
    },
    {
      name: "Sports Clinics or Workshops",
      value: "Partner with athletes to offer sports clinics or workshops to customers, providing tips and techniques related to their sport."
    },
    {
      name: "Exclusive Discounts or Offers",
      value: "Offer exclusive discounts or special offers on your products during the event, making it more enticing for customers to attend."
    },
    {
      name: "Photo Opportunities",
      value: "Create interactive photo opportunities with athletes and brand-related props for customers to share on social media."
    },
    {
      name: "Branded Giveaways",
      value: "Collaborate with athletes to distribute branded merchandise or promotional items to customers during the event."
    },
    {
      name: "Sporting Challenges",
      value: "Organize mini sporting challenges or competitions where customers can compete with athletes in friendly matches."
    },
    {
      name: "Athlete Styling Sessions",
      value: "If applicable, have athletes provide styling advice or recommendations for customers looking to upgrade their athletic gear."
    },
    {
      name: "Personalized Training Sessions",
      value: "Offer customers the opportunity to experience personalized training sessions led by the athletes."
    },
    {
      name: "Charity Events",
      value: "Partner with the athletes for charity events or fundraisers, encouraging customers to contribute to a cause while engaging with your brand."
    },
    {
      name: "In-Store Performances",
      value: "If athletes have talents beyond sports, arrange in-store performances like music, dance, or other entertainment."
    }
  ],
  gyms: [
    {
      name: "Athlete Workouts",
      value: "Have the college athletes lead special workout sessions at your gym, incorporating their training techniques and providing tips for participants."
    },
    {
      name: "Motivational Talks",
      value: "Organize motivational talks or seminars where the athletes share their fitness journeys and offer inspiration to gym members."
    },
    {
      name: "Athlete Challenges",
      value: "Collaborate with athletes to create fitness challenges that gym-goers can participate in, with rewards for top performers."
    },
    {
      name: "Personal Training Sessions",
      value: "Offer gym members the opportunity to have one-on-one or small group training sessions with the college athletes."
    },
    {
      name: "In-Store Autograph Sessions",
      value: "Host in-person autograph sessions with the athletes, giving gym members a chance to meet their sports idols."
    },
    {
      name: "Fitness Assessments",
      value: "Have the athletes conduct fitness assessments for interested gym members, providing personalized feedback and recommendations."
    },
    {
      name: "Group Fitness Classes",
      value: "Work with the athletes to co-host group fitness classes, combining their expertise with your gym's regular offerings."
    },
    {
      name: "Social Media Photo Opportunities",
      value: "Create interactive photo opportunities with the athletes and gym-related backdrops for gym members to share on social media."
    },
    {
      name: "Athlete-Branded Merchandise",
      value: "Collaborate with the athletes to design and offer exclusive athlete-branded merchandise for sale at your gym."
    },
    {
      name: "Challenges and Contests",
      value: "Organize gym challenges or contests with the participation of college athletes, encouraging gym members to compete for prizes."
    },
    {
      name: "Nutrition Workshops",
      value: "Partner with the athletes to host nutrition workshops or cooking demos that focus on healthy eating habits."
    },
    {
      name: "Sport-Specific Clinics",
      value: "If applicable, have the athletes lead sport-specific clinics for gym members interested in a particular sport or activity."
    },
    {
      name: "Special Events",
      value: "Organize special events or themed days with the athletes, such as 'Athlete Meet & Greet Day' or 'College Spirit Day.'"
    },
    {
      name: "Social Media Takeovers",
      value: "Allow the athletes to take over your gym's social media accounts for a day, documenting their experience and engaging with your online community."
    },
    {
      name: "Live Demonstrations",
      value: "Arrange live demonstrations by the athletes, showcasing various workout techniques, drills, or sports-specific skills."
    }
  ],
  coffee: [
    {
      name: "Barista for a Day",
      value: "Have the college athletes take on the role of a guest barista, serving coffee and interacting with customers behind the counter."
    },
    {
      name: "Coffee Tasting Event",
      value: "Host a coffee tasting event with the athletes, where they can share their favorite coffee blends and brewing methods with customers."
    },
    {
      name: "Latte Art Demonstrations",
      value: "Collaborate with athletes to demonstrate latte art techniques, adding a fun and creative element to your coffee offerings."
    },
    {
      name: "Social Media Takeover",
      value: "Allow the athletes to take over your coffee shop's social media accounts for a day, documenting their experience and engaging with your online community."
    },
    {
      name: "Instagram Live Interviews",
      value: "Host Instagram Live interviews with the athletes, discussing their favorite coffee drinks and experiences at your coffee shop."
    },
    {
      name: "Meet-and-Greet Sessions",
      value: "Organize meet-and-greet sessions where customers can meet the athletes, take photos, and have coffee with them."
    },
    {
      name: "Coffee Challenges",
      value: "Create coffee-related challenges for customers to participate in, with the athletes as judges or participants."
    },
    {
      name: "Coffee and Fitness Workshops",
      value: "Collaborate with athletes to host workshops or talks on how coffee can be incorporated into a fitness lifestyle."
    },
    {
      name: "Signature Drink Creation",
      value: "Have the athletes create their own signature coffee drinks, which can be featured on your menu for a limited time."
    },
    {
      name: "Coffee and Conversations",
      value: "Arrange intimate coffee and conversation sessions with the athletes, where they can share their experiences and stories with customers."
    },
    {
      name: "Social Media Contests",
      value: "Encourage customers to participate in social media contests during the event, with the chance to win coffee shop gift cards or athlete-signed merchandise."
    },
    {
      name: "Coffee Shop Challenges",
      value: "Organize challenges or games within the coffee shop, with the athletes as team leaders or participants."
    },
    {
      name: "Athlete Endorsements",
      value: "Have the athletes endorse your coffee shop on social media and in-person, explaining why they enjoy coming to your establishment."
    },
    {
      name: "Special Discounts",
      value: "Offer special discounts or promotions during the athlete appearances, incentivizing customers to visit your coffee shop."
    },
    {
      name: "Athlete-Branded Merchandise",
      value: "Collaborate with the athletes to design and offer exclusive athlete-branded coffee shop merchandise for sale."
    }
  ],
  restaurant: [
    {
      name: "Celebrity Chef Nights",
      value: "Have the college athletes serve as 'celebrity chefs' for a special night, where they can help prepare and serve dishes to customers."
    },
    {
      name: "Meet-and-Greet Events",
      value: "Organize meet-and-greet events with the athletes, allowing customers to interact with them, take photos, and get autographs."
    },
    {
      name: "Guest Servers",
      value: "Invite the athletes to be guest servers for a day, adding a fun and unique element to the dining experience."
    },
    {
      name: "Food Challenges",
      value: "Collaborate with athletes to create food challenges or eating contests that customers can participate in, with prizes for winners."
    },
    {
      name: "Athlete Favorites Menu",
      value: "Feature a special menu section with dishes inspired by the athletes' favorite foods or meals."
    },
    {
      name: "In-Store Sports Demonstrations",
      value: "If space permits, organize sports demonstrations or drills in the restaurant to showcase the athletes' skills."
    },
    {
      name: "Live Cooking Demos",
      value: "Host live cooking demonstrations with the athletes, where they can showcase their favorite recipes or cooking tips."
    },
    {
      name: "Social Media Takeover",
      value: "Allow the athletes to take over your restaurant's social media accounts for a day, sharing their experiences and engaging with your online audience."
    },
    {
      name: "Interactive Q&A Sessions",
      value: "Arrange interactive Q&A sessions with the athletes, where they can answer questions from customers about their careers and experiences."
    },
    {
      name: "Dine with the Athletes",
      value: "Offer customers the opportunity to have a meal with the athletes in a private dining setting, creating an exclusive experience."
    },
    {
      name: "Food Tasting Events",
      value: "Collaborate with athletes to host food tasting events, where customers can sample new dishes or menu items."
    },
    {
      name: "Instagram Story Shoutouts",
      value: "Have the athletes give shoutouts to your restaurant on their Instagram Stories, mentioning their favorite dishes or the overall dining experience."
    },
    {
      name: "Social Media Contests",
      value: "Encourage customers to participate in social media contests during the event, with the chance to win gift cards or athlete-signed merchandise."
    },
    {
      name: "Restaurant Challenges",
      value: "Organize fun restaurant-related challenges or games with the athletes, such as food trivia or table games."
    },
    {
      name: "Athlete Endorsements",
      value: "Request the athletes to endorse your restaurant on social media and in-person, sharing why they enjoy dining at your establishment."
    }
  ],
  auto_body: [
    {
      name: "Car Wash and Detailing",
      value: "Have the college athletes participate in a car wash and detailing event, where they help clean and shine customers' vehicles."
    },
    {
      name: "Meet-and-Greet Sessions",
      value: "Organize meet-and-greet sessions with the athletes, allowing customers to interact with them, take photos, and get autographs."
    },
    {
      name: "Automotive Tips and Q&A",
      value: "Host a session where athletes share automotive tips and answer questions from customers about car maintenance and care."
    },
    {
      name: "Social Media Takeover",
      value: "Allow the athletes to take over your auto body shop's social media accounts for a day, documenting their experience and engaging with your online community."
    },
    {
      name: "Car Care Workshops",
      value: "Collaborate with athletes to host workshops on car care and maintenance, demonstrating basic checks and DIY fixes."
    },
    {
      name: "In-Store Tire Change Demos",
      value: "If applicable, demonstrate tire-changing techniques in your shop with the athletes' participation."
    },
    {
      name: "Interactive Contests",
      value: "Organize contests or challenges related to cars or automotive knowledge, with the athletes as judges or participants."
    },
    {
      name: "Automotive Demonstrations",
      value: "Request athletes to demonstrate different auto body repair techniques or painting processes to showcase your shop's expertise."
    },
    {
      name: "Car Show and Expo",
      value: "Collaborate with athletes to organize a car show or expo, featuring their vehicles and attracting car enthusiasts."
    },
    {
      name: "Social Media Shoutouts",
      value: "Have the athletes give shoutouts to your auto body shop on their social media profiles, mentioning their positive experiences."
    },
    {
      name: "Customer Appreciation Day",
      value: "Host a customer appreciation event with the athletes, offering discounts and promotions to loyal customers."
    },
    {
      name: "Vehicle Customization",
      value: "If your shop offers customization services, collaborate with athletes to design custom vehicle modifications or wraps."
    },
    {
      name: "In-Store Photo Opportunities",
      value: "Create photo opportunities with the athletes and automotive-themed backdrops for customers to share on social media."
    },
    {
      name: "Brand Merchandise and Giveaways",
      value: "Offer branded merchandise and giveaways featuring the athletes' autographs or endorsements."
    },
    {
      name: "Testimonials and Reviews",
      value: "Request the athletes to provide video testimonials or written reviews about the quality of your auto body services."
    }
  ],
  apparel: [
    {
      name: "Fashion Show",
      value: "Collaborate with the athletes to organize a fashion show showcasing your clothing store's latest collections."
    },
    {
      name: "Meet-and-Greet Sessions",
      value: "Organize meet-and-greet sessions with the athletes, allowing customers to interact with them, take photos, and get autographs."
    },
    {
      name: "Personal Styling Sessions",
      value: "Offer customers the opportunity to have one-on-one personal styling sessions with the athletes, providing fashion advice and outfit recommendations."
    },
    {
      name: "Social Media Takeover",
      value: "Allow the athletes to take over your clothing store's social media accounts for a day, documenting their shopping experience and engaging with your online audience."
    },
    {
      name: "In-Store Styling Demos",
      value: "Have the athletes demonstrate how to style different outfits using your clothing store's merchandise."
    },
    {
      name: "Interactive Fashion Challenges",
      value: "Collaborate with athletes to create interactive fashion challenges or contests for customers to participate in."
    },
    {
      name: "Fashion Q&A and Panel Discussions",
      value: "Host Q&A sessions or panel discussions with the athletes, where they share fashion tips and answer customer questions."
    },
    {
      name: "Customer Appreciation Day",
      value: "Host a customer appreciation event with the athletes, offering exclusive discounts and promotions to loyal customers."
    },
    {
      name: "Social Media Shoutouts",
      value: "Request the athletes to give shoutouts to your clothing store on their social media profiles, mentioning their favorite items or shopping experiences."
    },
    {
      name: "In-Store Photo Opportunities",
      value: "Create interactive photo opportunities with the athletes and fashion-themed backdrops for customers to share on social media."
    },
    {
      name: "Brand Merchandise and Giveaways",
      value: "Offer branded merchandise and giveaways featuring the athletes' autographs or endorsements."
    },
    {
      name: "Fashion Workshops and DIY",
      value: "Collaborate with athletes to host fashion workshops or do-it-yourself sessions, where customers can learn new fashion skills or customization techniques."
    },
    {
      name: "Style Challenges and Trendspotting",
      value: "Organize style challenges where athletes help customers find trendy and stylish outfits."
    },
    {
      name: "Sustainable Fashion Event",
      value: "Work with athletes to promote sustainable fashion practices and eco-friendly clothing options in your store."
    },
    {
      name: "Runway Walk Lessons",
      value: "Have the athletes provide lessons on how to walk like a model on the runway."
    }
  ],
  apartments: [
    {
      name: "Apartment Tours with Athletes",
      value: "Have the college athletes accompany potential residents on apartment tours, sharing their experiences and insights about living at the complex."
    },
    {
      name: "Meet-and-Greet Sessions",
      value: "Organize meet-and-greet sessions with the athletes, allowing potential residents to interact with them, take photos, and ask questions."
    },
    {
      name: "Fitness and Wellness Workshops",
      value: "Collaborate with athletes to host fitness or wellness workshops, such as workout sessions or yoga classes, for residents and visitors."
    },
    {
      name: "Social Media Takeover",
      value: "Allow the athletes to take over your apartment complex's social media accounts for a day, documenting their experience and engaging with your online audience."
    },
    {
      name: "Interactive Games and Contests",
      value: "Organize interactive games or contests with the athletes, encouraging participation from potential residents."
    },
    {
      name: "Community Sports Events",
      value: "Host community sports events or tournaments in collaboration with the athletes, promoting a sense of camaraderie among residents."
    },
    {
      name: "Apartment Decorating Workshops",
      value: "Work with athletes to host apartment decorating workshops, offering tips and ideas for creating a stylish living space."
    },
    {
      name: "Personal Training Sessions",
      value: "Offer residents the opportunity to have one-on-one personal training sessions with the athletes."
    },
    {
      name: "Social Events with Athletes",
      value: "Organize social events, such as BBQs or movie nights, with the athletes as special guests."
    },
    {
      name: "In-Complex Scavenger Hunts",
      value: "Collaborate with athletes to create in-complex scavenger hunts for residents and visitors to explore the property."
    },
    {
      name: "Sustainable Living Seminars",
      value: "Host seminars on sustainable living practices, with athletes sharing their commitment to eco-friendly lifestyles."
    },
    {
      name: "Apartment Community Clean-up",
      value: "Coordinate community clean-up events where athletes and residents work together to beautify the complex."
    },
    {
      name: "Apartment Review Videos",
      value: "Request the athletes to create video testimonials or apartment review videos, showcasing the features and amenities of the complex."
    },
    {
      name: "Brand Merchandise and Giveaways",
      value: "Offer branded merchandise and giveaways featuring the athletes' autographs or endorsements."
    },
    {
      name: "Welcome Events for New Residents",
      value: "Host special welcome events for new residents, with the athletes present to greet and introduce them to the community."
    }
  ]
};
let placement = "top";
const RecDeliverables = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { eventType } = $$props;
  let { deliverables } = $$props;
  let { eventCampaignOrSingle } = $$props;
  let eventTypeParsed;
  let dropdownOpen = false;
  let dropdownOpenArr = new Array(Object.entries(DelData).length).fill(false);
  if ($$props.eventType === void 0 && $$bindings.eventType && eventType !== void 0)
    $$bindings.eventType(eventType);
  if ($$props.deliverables === void 0 && $$bindings.deliverables && deliverables !== void 0)
    $$bindings.deliverables(deliverables);
  if ($$props.eventCampaignOrSingle === void 0 && $$bindings.eventCampaignOrSingle && eventCampaignOrSingle !== void 0)
    $$bindings.eventCampaignOrSingle(eventCampaignOrSingle);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        console.log(eventType);
        if (eventType) {
          eventTypeParsed = eventType.toLowerCase().replace(/\s+/g, "_");
        }
      }
    }
    $$rendered = `${eventCampaignOrSingle === "Campaign" ? `${each(Object.entries(DelData), ([eType, dels], i) => {
      return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Chevron, "Chevron").$$render($$result, {}, {}, {
            default: () => {
              return `${escape(eType)}`;
            }
          })}`;
        }
      })}
		${validate_component(Dropdown, "Dropdown").$$render(
        $$result,
        {
          placement,
          class: "overflow-y-scroll bg-gray-700 h-52",
          open: dropdownOpenArr[i]
        },
        {
          open: ($$value) => {
            dropdownOpenArr[i] = $$value;
            $$settled = false;
          }
        },
        {
          default: () => {
            return `${each(dels, (deliverable) => {
              return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { class: "text-white" }, {}, {
                default: () => {
                  return `<p class="font-bold">${escape(deliverable.name)}</p>
					<p>${escape(deliverable.value)}</p>
				`;
                }
              })}
				<hr class="text-black">`;
            })}
		`;
          }
        }
      )}
		`;
    })}` : `${eventType && eventType !== "custom" ? `${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Chevron, "Chevron").$$render($$result, {}, {}, {
          default: () => {
            return `${escape(eventType)}`;
          }
        })}`;
      }
    })}
	${validate_component(Dropdown, "Dropdown").$$render(
      $$result,
      {
        placement,
        class: "overflow-y-scroll bg-gray-700 h-52",
        open: dropdownOpen
      },
      {
        open: ($$value) => {
          dropdownOpen = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${each(DelData[eventTypeParsed], (del) => {
            return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { class: "text-white" }, {}, {
              default: () => {
                return `<p class="font-bold">${escape(del.name)}</p>
				<p>${escape(del.value)}</p>
			`;
              }
            })}
			<hr class="text-black">`;
          })}`;
        }
      }
    )}` : ``}`}`;
  } while (!$$settled);
  return $$rendered;
});
const Radio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { options } = $$props;
  let { fontSize = 16 } = $$props;
  let { justify = "center" } = $$props;
  let { flexDirection = "column" } = $$props;
  let { inputName } = $$props;
  let { selected } = $$props;
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.fontSize === void 0 && $$bindings.fontSize && fontSize !== void 0)
    $$bindings.fontSize(fontSize);
  if ($$props.justify === void 0 && $$bindings.justify && justify !== void 0)
    $$bindings.justify(justify);
  if ($$props.flexDirection === void 0 && $$bindings.flexDirection && flexDirection !== void 0)
    $$bindings.flexDirection(flexDirection);
  if ($$props.inputName === void 0 && $$bindings.inputName && inputName !== void 0)
    $$bindings.inputName(inputName);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  return `<div class="${"flex " + escape(flexDirection !== "row" ? "flex-col" : "flex-row ", true)}">${each(options, (option) => {
    return `<label class="${"flex items-center w-full " + escape(justify === "left" ? "" : " justify-center", true)}"><input class="form-radio h-4 text-blue-500" ${selected === option ? "checked" : ""} type="radio"${add_attribute("name", inputName, 0)}${add_attribute("value", option, 0)}>
			<span class="ml-2">${escape(option)}</span>
		</label>`;
  })}
</div>`;
});
const InputList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { inputs = [{ id: 0, value: "", title: "" }] } = $$props;
  let { inputName } = $$props;
  let { titleName } = $$props;
  let { showName } = $$props;
  if ($$props.inputs === void 0 && $$bindings.inputs && inputs !== void 0)
    $$bindings.inputs(inputs);
  if ($$props.inputName === void 0 && $$bindings.inputName && inputName !== void 0)
    $$bindings.inputName(inputName);
  if ($$props.titleName === void 0 && $$bindings.titleName && titleName !== void 0)
    $$bindings.titleName(titleName);
  if ($$props.showName === void 0 && $$bindings.showName && showName !== void 0)
    $$bindings.showName(showName);
  return `<div class="flex flex-col">${each(inputs, (input, i) => {
    return `<div class="flex pr-5 md:pr-0 flex-col md:flex-row space-y-4 md:space-y-0 my-4 space-x-4"><p>${escape(showName)} ${escape(i + 1)}</p>

			<input class="w-full md:w-[35%] max-h-[45px] rounded-md text-black p-2" type="text"${add_attribute("value", input.title, 0)} placeholder="Enter title">

			<textarea class="w-full rounded-md text-black p-2" placeholder="Enter deliverable">${escape(input.value, false)}</textarea>
			<button class="text-xl font-extrabold">-</button>
		</div>`;
  })}
	${inputs.length > 0 ? `<input type="hidden"${add_attribute("name", inputName, 0)}${add_attribute("value", JSON.stringify(inputs.map((input) => ({ value: input.value, title: input.title })).filter((input) => input.value.trim() !== "" && input.title.trim() !== "")), 0)}>` : ``}
	<button class="text-xl font-extrabold">+</button></div>`;
});
const Compensation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let priceRanges = ["$20-100", "$100-500", "$500-1000", "$1000+", "Custom"];
  let compensationTypes = ["Money", "Product", "Both"];
  let { pay } = $$props;
  let { eventCampaignOrSingle } = $$props;
  let compSelected = "Price range";
  let open = false;
  let product = "";
  let { jsonData } = $$props;
  if ($$props.pay === void 0 && $$bindings.pay && pay !== void 0)
    $$bindings.pay(pay);
  if ($$props.eventCampaignOrSingle === void 0 && $$bindings.eventCampaignOrSingle && eventCampaignOrSingle !== void 0)
    $$bindings.eventCampaignOrSingle(eventCampaignOrSingle);
  if ($$props.jsonData === void 0 && $$bindings.jsonData && jsonData !== void 0)
    $$bindings.jsonData(jsonData);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        {
          jsonData = JSON.stringify({ pay, compSelected, product });
        }
        console.log(jsonData);
        if (eventCampaignOrSingle === "Campaign") {
          priceRanges = ["$100-500", "$500-1000", "$1000-5000", "$5000+", "Custom"];
        } else {
          priceRanges = ["$20-100", "$100-500", "$500-1000", "$1000+", "Custom"];
        }
      }
    }
    $$rendered = `
<p>Compensation Type</p>
${validate_component(Radio, "Radio").$$render(
      $$result,
      {
        options: compensationTypes,
        justify: "left",
        inputName: "Compensation type",
        selected: pay
      },
      {
        selected: ($$value) => {
          pay = $$value;
          $$settled = false;
        }
      },
      {}
    )}
${pay === "Product" || pay === "Both" ? `<p class="text-left text-xl text-white mt-5">Product</p>
	<input type="text" class="mx-5 shadow appearance-none border rounded mb-5 w-[90%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Nike Jordan 1 Retro High OG 'University Blue'"${add_attribute("value", product, 0)}>` : ``}

${pay === "Money" || pay === "Both" ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        class: "w-full text-left mt-2 bg-gray-700 border border-white mb-2"
      },
      {},
      {
        default: () => {
          return `${validate_component(Chevron, "Chevron").$$render($$result, {}, {}, {
            default: () => {
              return `${escape(compSelected)}`;
            }
          })}`;
        }
      }
    )}
	${validate_component(Dropdown, "Dropdown").$$render(
      $$result,
      {
        class: "bg-gray-700",
        placement: "top",
        open
      },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${each(priceRanges, (comp) => {
            return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { class: "text-white" }, {}, {
              default: () => {
                return `${escape(comp)}`;
              }
            })}`;
          })}`;
        }
      }
    )}` : ``}

${``}


<input type="hidden" name="estimated-payment"${add_attribute("value", jsonData, 0)}>`;
  } while (!$$settled);
  return $$rendered;
});
const SportRadio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { sportPref } = $$props;
  const sportsNames = [
    "Any Sport",
    "Baseball",
    "Basketball",
    "Bowling",
    "Cross country",
    "Fencing",
    "Field hockey",
    "Football",
    "Golf",
    "Gymnastics",
    "Ice hockey",
    "Lacrosse",
    "Rifle",
    "Rowing",
    "Skiing",
    "Soccer",
    "Softball",
    "Swimming & Diving",
    "Tennis",
    "Track & field (indoor)",
    "Track & field (outdoor)",
    "Volleyball (indoor)",
    "Volleyball (beach)",
    "Water polo",
    "Wrestling"
  ];
  let open = false;
  console.log("SPORTPREF", sportPref);
  if ($$props.sportPref === void 0 && $$bindings.sportPref && sportPref !== void 0)
    $$bindings.sportPref(sportPref);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="flex flex-row items-center">${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Chevron, "Chevron").$$render($$result, {}, {}, {
          default: () => {
            return `Sport Preference`;
          }
        })}`;
      }
    })}
	${validate_component(Dropdown, "Dropdown").$$render(
      $$result,
      {
        class: "w-54 bg-gray-700 h-32 overflow-y-scroll text-black  text-left whitespace-nowrap space-y-3 text-sm",
        open
      },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${each(sportsNames, (sportName) => {
            return `${validate_component(Radio$1, "Radio").$$render(
              $$result,
              {
                class: "text-white ml-2 mt-2",
                name: "sport-preference",
                value: sportName,
                group: sportPref
              },
              {
                group: ($$value) => {
                  sportPref = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `${escape(sportName)}`;
                }
              }
            )}`;
          })}
		<div class="h-2 w-full"></div>`;
        }
      }
    )}
	${sportPref && sportPref !== "undefined" ? `<div class="ml-10">${escape(sportPref)}</div>` : ``}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".nah.svelte-1n9z0m3{display:none}.gold.svelte-1n9z0m3{background:radial-gradient(\n				ellipse farthest-corner at right bottom,\n				#fedb37 0%,\n				#fdb931 8%,\n				#9f7928 30%,\n				#8a6e2f 40%,\n				transparent 80%\n			),\n			radial-gradient(\n				ellipse farthest-corner at left top,\n				#ffffff 0%,\n				#ffffac 8%,\n				#d1b464 25%,\n				#5d4a1f 62.5%,\n				#5d4a1f 100%\n			)}",
  map: null
};
let presignUrl = "/api/presign";
let s3 = "/api/s3object";
async function upload(file, dealId) {
  let { url, fields } = await fetch(`${presignUrl}?fileType=${file.type}`).then((response) => response.json()).catch((error) => {
    console.log(error);
    return false;
  });
  let form = new FormData();
  Object.keys(fields).forEach((key) => form.append(key, fields[key]));
  form.append("file", file);
  form.append("Content-Type", file.type);
  try {
    await fetch(url, { method: "POST", body: form });
  } catch (error) {
    console.log(error);
    return false;
  }
  form = new FormData();
  form.append("objectId", fields.key);
  form.append("fileName", file.name);
  form.append("fileSize", file.size);
  form.append("fileType", file.type);
  form.append("deal_id", dealId);
  //!!!
  form.append("position", "0");
  try {
    await fetch(s3 + "/" + encodeURIComponent(fields.key), { method: "POST", body: form });
  } catch (error) {
    console.log(error);
    return false;
  }
  return fields.key;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let endDate = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  let eventDate = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  let dateToday = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  let { data } = $$props;
  let { form } = $$props;
  let eventCampaignOrSingle;
  let inPersonOrVirtual;
  let genderPreference;
  let singleOrMultiple;
  let eventType;
  let deliverables = [{ id: 0, value: "", title: "" }];
  let pageNum = 0;
  let title;
  let shortDescription;
  let eventTypeCustom;
  let payJson;
  let location;
  let athNum;
  let sportPref;
  let pay;
  let isModalOpen = false;
  let croppedImage = null;
  let squareInput = false;
  let currImage = null;
  const options = [
    ["Single Event", "Campaign"],
    ["In Person", "Virtual", "Both"],
    ["Single Athlete", "Multiple Athletes"],
    ["Male", "Female", "Any gender"],
    [
      "In person appearance",
      "Sponsored post",
      "Shoutouts",
      "Autographs",
      // 'In person appearance activities',
      // 'Marketing Campaign',
      // 'Gyms',
      // 'Coffee',
      // 'Restaurant',
      // 'Auto Body',
      // 'Apparel',
      "custom"
    ]
  ];
  if (data.deal) {
    pageNum = 2;
    let deal = data.deal;
    title = deal.title;
    let isCampaign = "Campaign";
    if (!deal.isCampaign) {
      isCampaign = "Single Event";
    }
    eventCampaignOrSingle = isCampaign;
    shortDescription = deal.shortDescription;
    if (deal.isCampaign) {
      endDate = deal.endDate.toISOString().slice(0, 10);
    }
    eventDate = deal.eventDate.toISOString().slice(0, 10);
    eventType = deal.eventType;
    if (!options[4].includes(deal.eventType)) {
      eventType = "custom";
      eventTypeCustom = deal.eventType;
    }
    inPersonOrVirtual = deal.inPersonOrVirtual;
    if (deal.inPersonOrVirtual === "inPerson") {
      location = deal.location;
    }
    singleOrMultiple = deal.singleOrMultiple;
    if (deal.singleOrMultiple === "multiple") {
      athNum = deal.athleteCount;
    }
    genderPreference = deal.genderPreference;
    if (deal.sportPreference) {
      sportPref = deal.sportPreference;
    }
    let del = [];
    for (let i = 0; i < deal.recommendedDeliverables["set"].length; i++) {
      del.push({
        id: i,
        value: deal.recommendedDeliverables["set"][i].value,
        title: deal.recommendedDeliverables["set"][i].title
      });
    }
    if (deal.recommendedDeliverables["set"].length !== 0) {
      deliverables = del;
    }
    if (deal.dealImages.length !== 0) {
      currImage = `/api/s3object/${deal.dealImages[0].id}`;
    }
  }
  let showPreview = false;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        if (form) {
          if (croppedImage !== null) {
            upload(croppedImage, form.dealId);
          }
          if (form.noPublish) {
            goto(`/creation-center`);
          } else {
            goto(`/suggest/${form.dealId}?sportPref=${sportPref}`);
          }
        }
      }
    }
    {
      {
        console.log(deliverables);
      }
    }
    $$rendered = `${validate_component(ImageCropper, "ImageCropper").$$render(
      $$result,
      {
        mobile: true,
        croppedImage,
        square: squareInput,
        open: isModalOpen
      },
      {
        croppedImage: ($$value) => {
          croppedImage = $$value;
          $$settled = false;
        },
        square: ($$value) => {
          squareInput = $$value;
          $$settled = false;
        },
        open: ($$value) => {
          isModalOpen = $$value;
          $$settled = false;
        }
      },
      {}
    )}

${validate_component(PreviewCard, "PreviewCard").$$render(
      $$result,
      {
        brandName: data.user.name,
        showPreview,
        croppedImage,
        title,
        eventType,
        eventTypeCustom,
        shortDescription,
        sportPreference: sportPref,
        location,
        inPersonOrVirtual,
        estimatedPayment: payJson,
        endDate,
        eventDate,
        currImage,
        isCampaign: eventCampaignOrSingle,
        recommendedDeliverables: deliverables
      },
      {
        showPreview: ($$value) => {
          showPreview = $$value;
          $$settled = false;
        },
        croppedImage: ($$value) => {
          croppedImage = $$value;
          $$settled = false;
        },
        title: ($$value) => {
          title = $$value;
          $$settled = false;
        },
        eventType: ($$value) => {
          eventType = $$value;
          $$settled = false;
        },
        eventTypeCustom: ($$value) => {
          eventTypeCustom = $$value;
          $$settled = false;
        },
        shortDescription: ($$value) => {
          shortDescription = $$value;
          $$settled = false;
        },
        sportPreference: ($$value) => {
          sportPref = $$value;
          $$settled = false;
        },
        location: ($$value) => {
          location = $$value;
          $$settled = false;
        },
        inPersonOrVirtual: ($$value) => {
          inPersonOrVirtual = $$value;
          $$settled = false;
        },
        estimatedPayment: ($$value) => {
          payJson = $$value;
          $$settled = false;
        },
        endDate: ($$value) => {
          endDate = $$value;
          $$settled = false;
        },
        eventDate: ($$value) => {
          eventDate = $$value;
          $$settled = false;
        },
        currImage: ($$value) => {
          currImage = $$value;
          $$settled = false;
        },
        isCampaign: ($$value) => {
          eventCampaignOrSingle = $$value;
          $$settled = false;
        },
        recommendedDeliverables: ($$value) => {
          deliverables = $$value;
          $$settled = false;
        }
      },
      {}
    )}
${``}
<div class="${escape(showPreview ? "hidden" : "", true) + " bg-gray-900 text-white flex flex-col items-center text-center justify-center space-y-8"}"><h2 class="text-2xl mt-10">Create Offer</h2>

	<div class="profile-card flex flex-col bg-gray-800 shadow overflow-hidden mt-10 rounded-lg max-w-5xl w-[80%] mb-10 p-6"><form method="POST" action="?/makeDeal" class="w-full">
			${validate_component(Radio, "MyRadio").$$render(
      $$result,
      {
        inputName: "is-campaign",
        options: options[0],
        flexDirection: "row",
        selected: eventCampaignOrSingle
      },
      {
        selected: ($$value) => {
          eventCampaignOrSingle = $$value;
          $$settled = false;
        }
      },
      {}
    )}
			${eventCampaignOrSingle ? `${eventCampaignOrSingle !== "Campaign" ? `<div class="border my-5 p-5 rounded-xl"><h2 class="mb-4 items-left text-left">Event type:</h2>
						${validate_component(Radio, "MyRadio").$$render(
      $$result,
      {
        justify: "left",
        inputName: "event-type",
        options: options[4],
        selected: eventType
      },
      {
        selected: ($$value) => {
          eventType = $$value;
          $$settled = false;
        }
      },
      {}
    )}
						${eventType && eventType === "custom" ? `<div class="mt-5"><label class="text-gray-300 text-sm font-bold mb-2 text-center" for="event-type">Custom Event Type</label>
								<input id="event-type-custom" name="event-type-custom" type="text" class="mx-5 shadow appearance-none border rounded mb-5 w-[90%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="ex: Social Media Post"${add_attribute("value", eventTypeCustom, 0)}></div>` : ``}</div>` : ``}
				<div class="border p-2 rounded-xl mt-4 align-left"><h2 class="mt-4">Deal title</h2>
					<input id="deal-title" name="deal-title" type="text" class="mx-5 shadow appearance-none border rounded mb-5 w-[90%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="ex: Social Media Post"${add_attribute("value", title, 0)}>

					<label class="block text-white text-lg font-bold mb-2" for="message">Short description of your event</label>
					<textarea id="short-description" name="short-description" rows="5" class="mx-5 shadow appearance-none border rounded mb-5 w-[90%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="ex: Join us for a night of fun and games!">${escape(shortDescription || "")}</textarea>
					<div class="mb-5">
						${eventCampaignOrSingle !== "Single Event" ? `<h2 class="mb-4 text-left ml-2">Campaign start</h2>
							<input class="text-black text-center max-w-[90%] w-72" type="date" id="event-date" name="event-date"${add_attribute("min", dateToday, 0)}${add_attribute("value", eventDate, 0)}>
							<h2 class="mb-4 ml-2 text-left">Campaign end</h2>
							<input class="text-black text-center max-w-[90%] w-72" type="date" id="end-date" name="end-date"${add_attribute("min", eventDate, 0)}${add_attribute("value", endDate, 0)}>` : `<h2 class="mb-4 text-left">When is your single event</h2>
							<input class="text-black text-center max-w-[90%] w-72" type="date" id="event-date" name="event-date"${add_attribute("min", dateToday, 0)}${add_attribute("value", eventDate, 0)}>`}</div>
					<div class="border my-5 rounded-xl p-3"><p class="text-gray-200 text-xl mb-2">Main Deal Image</p>

						${!currImage && !croppedImage ? `<button class="${escape(croppedImage ? "nah" : "", true) + " gold text-white hover:bg-gradient-to-br focus:ring-4 focus:outline-none shadow-green-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 svelte-1n9z0m3"}">Upload Image
							</button>` : ``}
						${currImage !== null ? `<img${add_attribute("src", currImage, 0)} alt="Profile example" class="w-1/2 mx-auto">
							<button class="border border-white rounded-full mt-3 p-3">Change Image</button>` : `${croppedImage !== null ? `<img${add_attribute("src", URL.createObjectURL(croppedImage), 0)} alt="Profile example" class="w-1/2 mx-auto">
							<button class="border border-white rounded-full mt-3 p-3">Change Image</button>` : ``}`}</div></div>
				${pageNum >= 1 ? `<div class="border mt-5 rounded-xl p-3">${eventCampaignOrSingle === "Single Event" ? `<div class="p-2"><h2 class="mb-4 text-left">Event in person or virtual:</h2>
								${validate_component(Radio, "MyRadio").$$render(
      $$result,
      {
        inputName: "in-person-or-virtual",
        options: options[1],
        flexDirection: "row",
        selected: inPersonOrVirtual
      },
      {
        selected: ($$value) => {
          inPersonOrVirtual = $$value;
          $$settled = false;
        }
      },
      {}
    )}
								${inPersonOrVirtual && inPersonOrVirtual === "In Person" ? `<h2 class="mt-4">Deal location</h2>
									<input id="deal-location" name="deal-location" type="text" class="mx-5 shadow appearance-none border rounded mb-5 w-[90%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="ex: Peterson Events Center"${add_attribute("value", location, 0)}>` : ``}
								<hr class="mt-2"></div>` : ``}

						<div class="mb-5"><h2 class="mb-4 text-left">Single or multiple athletes:</h2>
							${validate_component(Radio, "MyRadio").$$render(
      $$result,
      {
        inputName: "single-or-multiple",
        options: options[2],
        flexDirection: "row",
        selected: singleOrMultiple
      },
      {
        selected: ($$value) => {
          singleOrMultiple = $$value;
          $$settled = false;
        }
      },
      {}
    )}
							${singleOrMultiple === "Multiple Athletes" ? `<div class="mb-4 w-32 mx-auto"><label class="text-gray-300 text-sm font-bold mb-2 text-left" for="number-of-athletes">Number of Athletes</label>
									<input id="number-of-athletes" name="number-of-athletes" type="number" min="0" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="#Athletes"${add_attribute("value", athNum, 0)}></div>` : ``}
							<hr class="mt-2"></div>
						<div class="mb-2"><h2 class="mb-4 text-left">Gender preference:</h2>
							${validate_component(Radio, "MyRadio").$$render(
      $$result,
      {
        inputName: "gender-preference",
        options: options[3],
        flexDirection: "row",
        selected: genderPreference
      },
      {
        selected: ($$value) => {
          genderPreference = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
						<div class="border mt-5 rounded-xl align-left"><div class="flex p-5 flex-col sm:flex-row items-center">${validate_component(SportRadio, "SportRadio").$$render(
      $$result,
      { sportPref },
      {
        sportPref: ($$value) => {
          sportPref = $$value;
          $$settled = false;
        }
      },
      {}
    )}
								<input type="hidden" name="sport-preference"${add_attribute("value", sportPref, 0)}>
								</div></div>
						<div class="border mt-5 p-4 rounded-xl text-left">${validate_component(Compensation, "Compensation").$$render(
      $$result,
      {
        jsonData: payJson,
        eventCampaignOrSingle,
        pay
      },
      {
        jsonData: ($$value) => {
          payJson = $$value;
          $$settled = false;
        },
        eventCampaignOrSingle: ($$value) => {
          eventCampaignOrSingle = $$value;
          $$settled = false;
        },
        pay: ($$value) => {
          pay = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>` : ``}

				${pageNum >= 2 ? `<div class="border rounded-xl mt-5 p-3">${eventType !== "custom" ? `<h2 class="text-xl mb-2">Recommended Deliverables</h2>
							${validate_component(RecDeliverables, "RecDeliverables").$$render(
      $$result,
      {
        eventType,
        eventCampaignOrSingle,
        deliverables
      },
      {
        eventType: ($$value) => {
          eventType = $$value;
          $$settled = false;
        },
        eventCampaignOrSingle: ($$value) => {
          eventCampaignOrSingle = $$value;
          $$settled = false;
        },
        deliverables: ($$value) => {
          deliverables = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}
						

						<div class="border mt-5 p-5 rounded-xl align-left"><h2 class="text-xl mb-2">Deal Deliverables for athlete</h2>
							${validate_component(InputList, "InputList").$$render(
      $$result,
      {
        inputName: "deliverables",
        showName: "Deliverable",
        inputs: deliverables
      },
      {
        inputs: ($$value) => {
          deliverables = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>
					<div class="text-right mr-auto mt-5"><button class="rounded-full p-3 bg-green-700" name="deal-submit" value="publish" type="submit">Publish Deal</button>
						<button class="rounded-full p-3 bg-red-700" name="deal-submit" value="no-publish" type="submit">Save for later</button></div>` : ``}
				${pageNum <= 1 ? `<button class="bg-green-600 mx-3 p-3 mt-4 rounded-full w-fit">Continue Deal</button>` : ``}
				<button class="mx-3 bg-yellow-400 text-black rounded-full p-3 text-right mt-5">Show preview</button>` : ``}
			${data && data.deal ? `<input type="hidden" name="deal-id"${add_attribute("value", data.deal.id, 0)}>` : ``}
			${form?.message ? `<p class="text-red-500 text-lg">${escape(form.message)}</p>` : ``}</form></div>
</div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
