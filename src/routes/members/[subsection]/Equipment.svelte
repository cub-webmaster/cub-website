<script lang="ts">
	import Alert from '$components/common/Alert.svelte';
	import Link from '$components/common/Link.svelte';
	import PageSection from '$components/layout/PageSection.svelte';
	import { fees } from '$data/join/fees';
	import links from '$data/links';
</script>

<PageSection>
	<p>
		Archery equipment is extremely central to the sport and can be highly personal. As such, while
		CUB is able to provide a modest number of entry-level bows, most of our archers end up buying
		their own kit. This page details some policies we have regarding member equipments and some
		advice regarding purchasing and maintenance.
	</p>
	<p>
		Note that while CUB welcomes archers of any bowstyle, there are a few types of equipments that
		we <b>do not allow</b> on our range under any circumstances for safety and regulatory reasons.
		Mainly, these are
		<b>crossbows, any compound bow above 60lb drawing weight, and carbon fibre arrows</b>. Please
		refer to our safety documentations or talk to our Safety Officer if you wish to know more about
		related policies.
	</p>
	<Alert>
		Please be advised that anyone using equipment that are determined to be safety hazards at our
		sessions will be asked to stop or leave immediately.
	</Alert>
</PageSection>

<PageSection headingText="Club Equipment" id="club">
	<p>
		The club provides a good number of basic wooden recurve bows and aluminium arrow sets mainly for
		the use of beginners. All members are welcome to use them with no extra costs. Besides that, we
		also have a large amount of basic personal protection equipment (PPE) needed for shooting.
	</p>
	<p>
		If you would like better quality or more specialised equipment, please consider buying your own
		kit or using our rental scheme.
	</p>
</PageSection>

<PageSection headingText="Rental Scheme" id="rental">
	<p>
		Are you a keen beginner who wants to compete but held back by the financial commitment of buying
		a bow? Or maybe you just don't have a shooting kit at Cambridge at the moment. Whatever the
		reason, you can gain access to higher quality bows than the standard wooden ones at a low cost
		through our rental scheme.
	</p>
	<p>
		CUB has a selection of recurve bows and accessories that can be fitted to you, and we usually
		rent them out on a termly basis. During the rental period, you are allowed to bring the kit with
		you to shoot in other clubs and competitions, which we usually do not allow for our wooden bows.
		Further, you will get the opportunity to familiarise yourself more with a personalised set of
		equipments, which can be helpful in improving performance and learning more about your
		preference before investing in your own kit.
	</p>
	<p>
		If this interests you, please contact the <Link
			href={`mailto:${links.equipment_email.url}`}
			external
			label="Equipment Officer"
		/> for more details. Note that we prioritise novice squad members when renting out equipment, so there
		is no guarantee that we can accommodate everyone interesting in renting, though we will try our best.
	</p>
	<p>
		As of the 2025/26 academic year, bow rental costs £{fees.rental} per term, and requires a £{fees[
			'rental-deposit'
		]} refundable deposit at the start of each rental period.
	</p>
</PageSection>

<PageSection headingText="Buying Your Own" id="buying">
	<p>
		Buying your first personal set of equipment is an exciting milestone in every archer's journey,
		but it can also be quite daunting! If you are in a position where you are not sure where to
		start, here are some useful online resources that can help, and a few archery shops that our
		archers would recommend.
	</p>
	<!-- TODO -->
	<p>
		At the same time, feel free to talk to a committee member or a more experienced archer for
		advice. We're always happy to support our fellow archers and share our experience with each
		other.
	</p>
</PageSection>

<PageSection headingText="Storage" id="storage">
	<p>
		Please note that the club is unable to provide storage for archers' personal equipment. This is
		due to lack of space in our venues, and because we can only cover club-owned equipment under our
		insurance policies in the event of damage or theft.
	</p>
	<p>
		Archers with their own equipment should store it at home, and bring it to training sessions with
		them. We recommend purchasing a bow-bag that you can cycle or walk easily with if you don't
		already own one. Make sure that you store your bow in low humidity and wipe it down after
		shooting in the rain, and avoid extreme temperatures, as these can damage the bow.
	</p>
	<p>
		Note that colleges typically do not provide insurance or assistance with storage/transportation
		of archery equipment. However, it is known that a few colleges has policies against storing your
		shooting kit in accommodation, as they can be considered a weapon. In this case, it is usually
		possible to liaise with the college to store it somewhere safe e.g. in the Porters' Lodge.
	</p>
	<p>
		Please let a member of committee know if you need support communicating with college authorities
		regarding equipment issues.
	</p>
</PageSection>

<PageSection headingText="Maintenance" id="maintenance">
	<p>
		It is each archer's personal responsibility to ensure that your equipment is safe and
		well-maintained, including anyone using club equipment. If there are safety issues around your
		equipment, committee members will ask you to stop using it at sessions. Be aware that if it has
		been a while since you last shot, especially if you are returning to the sport after several
		years, you may want a detailed check of your bow (e.g., at an archery shop).
	</p>
	<p>
		Some parts of the bow will need replacing semi-regularly (e.g., plastic arrow rest, bowstring,
		fletches). If you need help with this, speak to the committee or an experienced archer who can
		teach you how! We also regularly hold equipment seminars to help beginners learn how to carry
		out basic care and simple parts replacements for their bow.
	</p>
	<p>
		In addition, the club owns a number of maintenance tools that can be borrowed by members,
		including fletching jigs, bracing height gauges, string wax and multitools. Feel free to use
		them at any point during a session, and no need to worry about buying your own.
	</p>
</PageSection>
