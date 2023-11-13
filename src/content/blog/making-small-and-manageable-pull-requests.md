---
title: Making Small and Manageable Pull Requests
# date: 2022-07-13T12:00:00Z
description: Earlier in my career, I struggled with this concept. Oftentimes, I felt that for a feature to be "ready for review", it must have all of the necessary parts fully worked out and 100% complete.
pubDate: 'Jul 13 2022'
heroImage: '/robo-and-cat-coding-960x480.jpeg'
---

In a previous article, I shared some thoughts about [Writing Better Pull Requests](https://micheal.dev/blog/writing-better-pull-requests). Continuing on that topic, I want to share some ideas on how to handle PRs that are difficult, complex, or too large to easily review. In my experience, these types of PRs can be bottlenecks in the development process that can introduce unwanted side-effects.

> "I've never seen a PR that was too small but I've seen many that were too large."
>
> [Sal Ferrarello](https://twitter.com/salcode)

It's important to mention that not all large PRs are bad nor are all of them good. So what makes a PR large? Is it too many changes or files changed? Too much documentation? Here are a few characteristics that I've noticed:

- The PR is difficult to review for team members and QA. This could be because it has too many changes that appear complex when looking at it.
- Large PRs tend to take longer to create, review, and get merged.
- Accidentals such as new bugs, non-optimized code, or unintentional code are more likely to be missed during review.
- Large PRs in some cases prevent or block other tasks because it's easy for it to take longer than expected.
- Large PRs are more likely to experience merge conflicts because they linger in the review process longer.
- Lengthy descriptions can also contribute to a PR feeling large.

## How to prevent large PRs

In my opinion, the best way to deal with a large PR is by taking precautions and to avoid creating it in the first place. By thinking about a few questions before diving into a task, you can save yourself some time later.

### 1. Will another team member need your code for their work?

If you know that your code is required for other team members, it might be a good idea to focus on a PR that covers exactly what they need first. Then submit a second PR containing the rest of the changes.

### 2. Is this a large feature or a refactor?

Larger features and refactors are one of the most common causes for large PRs. The challenge here is that in order to be feature complete we end up with a lot of code changes. Here are some tips that can be used to make this easier:

- Plan ahead and look for ways the task can be broken into smaller tasks before working.
- Write smaller commits that encompass very purposeful changes. This will give you options later, should you need to re-organize your PR into multiple PRs.
- Avoid increasing the task scope with "Nice to have changes" such as renaming large amounts of variables, huge linter fixes, or addressing issues that are unrelated to your current task. These types of tasks can easily be circled back to later.
- If your task is really complex, consider using a primary and secondary PR strategy. You can create a primary PR which you will merge smaller PRs into. Once all secondary PRs are complete you can do a quick review on the primary PR and merge since you trust all of the code up to that point. **Each PR will have its own description which allows for thorough documentation. The primary PR should cover the bigger picture for the feature and the secondary PRs should cover changes and details specific to each PR.**

_Note: This process works best if you use the same reviewers throughout the process so that they're familiar with each part._

### 3. Avoid increasing the scope of the ticket

While working, it's very easy to add minor improvements that are nice to have but fall outside of the requirements of the original ticket. When you encounter this behavior, you should stop and open a new ticket in the backlog.

> Earlier in my career, I struggled with this concept. Oftentimes, I felt that for a feature to be "ready for review", it must have all of the necessary parts fully worked out and 100% complete. Unfortunately,That mindset resulted in huge PRs that were difficult to review and took longer than expected.

The next time you're working on a PR and you say "I can just quickly fix this one thing", please stop yourself and take 2-5 minutes to write a quick ticket description. This will allow you to address the issue later and keep your PR focused.

### 4. The point of no return

Sometimes, it's unavoidable that we create a huge PR and only realize afterwards that we've created a Frankenstein. Don't feel bad, these moments help us learn and grow as developers so that we do not repeat the mistake. Since the work is already done our goal changes to mitigating the difficulty for potential reviewers. Here are a few steps I like to use:

- If needed, assuming we wrote small and meaningful commits, we could still split the PR into smaller pieces. This will require some git skills such as `git rebase` and `git cherry-pick`.
- Offering to do a call with reviewers will go a long way! This will give you a chance to explain and discuss choices while also covering each area of code or atleast the important areas.
- Sometimes it's better to power through and count this as a lesson learned for future PRs.

## Getting your team onboard with making smaller, focused PRs

While I'm passionate about making PRs small and focused, it's important to remember not everyone will agree with this practice. Oftentimes this is caused by the feeling that it's more work or it will make the bigger picture harder to grasp. To get other developers on board with this idea they need to see the value and experience it for themselves. I recommend leading by example and then sharing tips as needed.

For example, if you know someone who frequently submits complex PRs that are hard to review, approach them with friendly feedback. The person might not be aware that they are creating these types of PRs, so it's important to assume they had good intentions. Taking a few minutes to hop on a call and discuss improvement tips goes a very long way. It will help make sure the feedback is received positively and will give them a chance to ask questions.

## Take-aways

The best way to deal with a huge PR is to avoid it or plan for it. Planning ahead will certainly make you a wiser developer and improve your communication skills greatly. Knowing when to say _"Let's open an issue and address this later"_ is an art form that requires practice.
