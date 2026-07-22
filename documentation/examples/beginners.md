# Beginners' Course-related Changes

Beginners' Course happens every year, and this is often the first big update you would need to do besides changing the committee lineup. Learn the exact steps you need to do that here.

## :control_knobs: The Big Switch

In order make this recurring task as easy as possible, I've set up a "switch" for setting up our annual recruitment message quickly. In `src/data/general.ts` you should be able to find the following:

```typescript
// beginners' course controls
export const beginnerRecruitmentOngoing = false; // set to true when signups are open
export const recruitmentYear = 2025;
export const beginnersCourseStartDate = '19th of October';
```

The `beginnerRecruitmentOngoing` variable is key here. Setting this to `true` will do the following:

- change the alert in the front page to say that beginners' course is now open for signups
- change the tasters section on the beginners page to say signups are open
- change the beginners course section on the beginners page to say signups are open

The 2 other variables are used in texts of the relevant sections so make sure to update them to the correct values as well. Once you've updated these 3 variables, there are a couple more things to do:

1. Set the links of the beginners course and taster session signup forms in `src/data/links.ts`

   ```typescript
   ...

   const links: Record<string, Link> = {
       ...
       // update url for these 2
       beginners_form: { url: "", label: "Beginners' Course Signup Form"},
       tasters_form: {url: "", label: "Taster's Signup Form"},
       ...
   }

   ...
   ```

2. Set the fees for the new year in `src/data/join/fees.ts` **if** any fees have changed (including beginners course and bow rental fees)

### Help! We're changing the way we do signups!

In the case where the process mentioned above doesn't fulfill the current needs of the club, you might need to make some finer edits, see the list below for parts of the code/text you might want to change to accommodate new systems:

- front page (alert right after carousel)
- beginners page (tasters section, beginners course section etc)
- experienced archers page
- staff/alumni joiners page
- resources data

### Side Note: Checking for outdated info

This is also the perfect time for you to check that all information on the site are up to date, in anticipation for the wave of site visitors ahead of the new academic year. Make sure to check for mentions of the current academic year and check if the relevant content needs to be updated, and that information on joining or novice squads, in particular, are all accurate.

## :leftwards_arrow_with_hook: Closing Recruitment

Once signups have closed, all you have to do is turn the `beginnerRecruitmentOngoing` variable back to `false`. If you made any custom tweaks that are not tied to the big switch, you might also want to write them down here so you remember to revert them where necessary.
