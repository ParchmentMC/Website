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

All contributions to the Parchment mappings data are reviewed and merged according to this process. This ensures
transparency between the mappings contributors and the ParchmentMC team, and allows contributors to assess at what
stage their PR is at.

## Responsible Teams

The **Parchment mappings team** is responsible for the whole process, and is split into two relevant sub-teams:

- The **reviewers sub-team** has the responsibility of reviewing PRs and merging them, pursuant to this process.
- The **standards sub-team** has the responsibility of maintaining and approving changes to the standards and the 
  process, and decide on matters relating to the mapping standards.

The **repository administrators** have full admin access to the repository and may forcefully merge a Pull Request,
overriding any technical requirements on PRs such as status checks. This privilege should only be used in cases where 
no other remedies are available, such as emergency situations, malfunctioning status checks, or otherwise.

Only members of the reviewers sub-team and repository administrators can merge PRs into the main versioned branches.

## PR Requirements

Pull Requests must abide by these requirements:

- All automatic checks are successful.
    - The Contributor License Agreement (CLA) must be signed.
    - The data validation test from the CI must pass, and there must be no validation errors.

- Contributions should be substantial.
    - While this requires PRs be substantial, there is no 'minimum contribution' requirement or definition.
    - Prefer submitting one PR containing a number of smaller unrelated contributions, than many PRs containing very 
      small contributions.
    - A PR should preferably be reasonable in scope, such as mapping a package or adjusting javadocs. Large unrelated 
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
      requested from the reviewers sub-team.

- <span class="fa-li"><i class="fas fa-comments"></i></span> 
  The PR will now be reviewed by the reviewers sub-team. They may choose to approve the PR, request changes, or 
  neutrally leave comments.

  For a PR to be considered for merging, it must have at least one (1) approving review from a member of the reviewers 
  sub-team without any unresolved conversations and no pending changes from reviews.

    {:.fa-ul .outline}
    - <span class="fa-li"><i class="fas fa-comment-slash"></i></span> 
      If a change requesting review from a member of the mappings team has been resolved, their review may be dismissed
      as being outdated at the discretion of another member of the mappings team.

      This prevents situations where a reviewer requests changes on a PR then becomes unable to re-review the PR for an 
      extended period of time, which delays the PR from being considered for merging.

- <span class="fa-li"><i class="fas fa-code-branch"></i></span>
  After a PR has passed the review requirements above, a member of the mappings team (which may be the same approving 
  member of the reviewers sub-team) may then squash-merge the PR, integrating the changes into the target branch.

    {:.fa-ul .outline}
    - <span class="fa-li"><i class="fas fa-hourglass"></i></span> 
      The approving member of the reviewers sub-team or the member of the mappings team responsible for merging the PR
      may temporarily delay the merging of the PR at their discretion. 
      
      For example, the member may decide to request a secondary opinion/review of another member of the mappings team
      regarding the contents of the PR.
