# Systems of Version Controls

## What is a Version Control System?

A Version Control System (VCS) is a software tool that helps manage changes to source code or other files over time. It tracks modifications made to files, allowing multiple people to work collaboratively on a project, and provides a way to revert back to previous versions if needed.

Some popular VCSs include Git, Mercurial, and Subversion.

## Types of VCS

Version Control Systems (VCS) can be broadly categorized into three main types:

- Centralized Version Control Systems (CVCS)
- Distributed Version Control Systems (DVCS)

## Centralized Version Control Systems (CVCS)

In a CVCS, a central server stores the entire version history and files of a project. Developers can check out files from the server, make changes locally, and then commit those changes back to the server. Examples of CVCS include Concurrent Versions System (CVS) and Apache Subversion (SVN).

In this model, developers need a constant connection to the server to perform version control operations. However, it can suffer from a single point of failure if the central server goes down or becomes inaccessible.

## Distributed Version Control Systems (DVCS)

DVCS systems provide a distributed approach, where each developer has a complete copy of the repository, including the entire version history. Examples of DVCS include Git, Mercurial, and Bazaar.

With DVCS, developers can work offline, commit changes to their local repository, and synchronize with other repositories when a connection is available. This decentralization enhances collaboration, allows for more flexible branching and merging, and reduces the risk of losing work due to server failures.
