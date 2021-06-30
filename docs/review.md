---
layout: page
title: PR Review Process
---

<style>
.fa-ul.outline .fa-li {
    font-size: 1.3em;
    width: 2.25em;
}
</style>

# PR Review Process

All contributions to the Parchment mappings data are reviewed and merged according to this process. This ensures
transparency between the mappings contributors and the ParchmentMC team, and allows contributors to assess at what
stage their PR is at.

## Responsible Teams

The **Parchment mappings team** is responsible for the whole process, and is split into two relevant subteams:

- The **reviewers subteam** has the responsbility of reviewing PRs and merging them, pursuant to this process.
- The **standards subteam** has the responsibility of maintaining and approving changes to the standards and the 
  process, and decide on matters relating to the mapping standards.

The **repository administrators** have full admin access to the repository and may forcefully merge a Pull Request,
overriding any technical requirements on PRs such as status checks. This privilege should only be used in cases where 
no other remedies are available, such as emergency situations, malfunctioning status checks, or otherwise.

Only members of the reviewers subteam and repository administrators can merge PRs into the main versioned branches.

## PR Requirements

Pull Requests must abide by these requirements:

- All automatic checks are successful.
    - The Contributor License Agreement (CLA) must be signed.
    - The data validation test from the CI must pass, and there must be no validation errors.

- Contributions should be substantial.
    - While this requires PRs be substantial, there is no 'minimum contribution' requirement or definition.
    - Prefer submitting one PR containing a number of smaller unrelated contributions, than many PRs containing very 
      small contributions.
    - A PR should preferrably be reasonable in scope, such as mapping a package or adjusting javadocs. Large unrelated 
      changes should be made in separate PRs.

- Contributions must abide by the [Parchment mapping standards](standards).


## Outline

{:.fa-ul .outline}
- <span class="fa-li"><i class="fas fa-code-branch"></i></span> 
  A contributor submits a Pull Request to the mappings repository with their contributions. This PR will await 
  triaging by a mappings team member.

- <span class="fa-li"><i class="fas fa-search"></i></span>
  A mappings team member will perform a cursory inspection of the changes in the PR.

    - All automatic checks must pass before it is labelled and starts review.
    - The cursory inspection is to ensure that the changes in the PR do not contain any content not fit for the 
      repository.
    - Once the triaging member has performed a cursory inspection and does not find any objectively objectionable 
      content and the automatic checks succeed, it is labelled accordingly by version and contents and a review is 
      requested from the reviewers subteam.

- <span class="fa-li"><i class="fas fa-comments"></i></span> 
  The PR will now be reviewed by at least one (1) member of the reviewers subteam, and at least by two people.

  For a PR to be considered for merging, it must have at least two (2) approving reviews without any unresolved 
  conversations and no change requesting reviews. One (1) approving review must be from a member of the reviewers 
  subteam.

    - If all review comments of a change requesting review from a member of the mappings team have been resolved,
      and more than five (5) days have passed since the resolution of these review comments, then the review may be 
      dismissed as being outdated.

      This prevents situations where a reviewer requests changes on a PR then becomes unable to rereview the PR for an 
      extended period of time, which blocks the PR from being considered for merging (as a change requesting review is
      present on the PR from a member of the reviewers subteam).

- <span class="fa-li"><i class="fas fa-hourglass-start"></i> </span>
  After a PR has passed the review requirements above, a waiting period of at least forty-eight (48) hours for any 
  further comments or reviews will begin.

    - For minor changes, a member of the reviewers subteam may reduce the waiting period to twenty-four (24) hours.
    - For PRs which generate conflicting opinions or large discussions, the PR may be placed under a fixed-length 
      discussion period (see the following section).

- <span class="fa-li"><i class="fas fa-hourglass-end"></i> </span>
  Once the waiting period has elasped without any futher change requesting reviews from any mappings team member, or 
  a fixed-length discussion period has elapsed (see following section), it will be assigned to the reviewers subteam 
  for merging.

- <span class="fa-li"><i class="fas fa-code-branch"></i></span>
  An available member of the reviewers subteam will then squash-merge the PR, integrating the changes into the 
  target branch.

## Fixed-Length Discussion

If a PR generates conflicting opinions and reivews or creates a large discussion that warrants an extended period of
time for discussion, the reviewers subteam may place the PR under a fixed-length discussion period. During the 
fixed-length period, discussions may freely occur between reviews on the PR. 

After this period has elapsed, the reviewers subteam will hold an internal vote on whether the PR shall be merged.
If a majority votes in favor, then the PR shall be assigned for merging. If a majority votes in dissent, then the PR 
shall be closed. For a tie, the whole mappings team will vote, and a tie will mean the PR shall be closed. A majority 
is defined as more than fifty percent (50%) of the voters.

### Length

The length of the discussion will last at least forty-eight (48) hours, and at most one (1) week. If the discussion 
does not yet seem to have reached a conclusion, the designated fixed length of the discussion is less or equal to 
seventy-two (72) hours, and the fixed length has not yet been extended, then the fixed-length discussion period may be 
extended by up to forty-eight (48) hours, upon the consensus of the reviewers subteam.
