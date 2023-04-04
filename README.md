# Overview

It is a simple to-do app that acts as a sandbox for QA candidates to show off their testing skills.

## Technical Overview

**Front-End:** React

**Back-End:** Ruby (i.e. Sinatra)

It can either be spawned in your host machine or served through Docker. Check [development.md](docs/development.md) for more information about that.

Lastly, the Back-End API is documented at [api.md](docs/api.md).

## Business Overview

The complete list of specifications for this app can be found in [requirements.md](docs/requirements.md).

# Assignment Instructions

Thank you for your interest in joining Toptal! This section consolidates everything you need to know about this assignment. We intend to assess your tool-belt in terms of testing, from your attention to details to how you architecture the code you write.

Read it very carefully and take your time to understand what we want from you. If you still have questions after going through this section, be sure to contact your recruiter. They will be happy to clear out any remaining doubts you may have.

You can approach this assignment from four different angles: **Front-End**, **API**, **End-to-End** and **DevOps**. By the time you are reading this, your recruiter should have informed you already which ones we expect you to do. Again, reach out to them if this is not clear. **You will only be evaluated on the areas we assigned you to do.**

The specific instructions for each one of them can be found in the links below:
- [Front-End](docs/instructions/front-end.md)
- [API](docs/instructions/api.md)
- [End-to-End](docs/instructions/end-to-end.md)
- [DevOps](docs/instructions/devops.md)

The expected amount of time to finish the assignment is around *6 hours*, but don't interpret this as a hard requirement. In other words, this is just a high-level estimation. Take the time you need to send us a great solution.

Make sure to let your recruiter know when you are done. Our internal team will need a couple of days to evaluate what you built and schedule an interview with you. In this call, we will discuss it all together. Therefore, make sure to prepare yourself. Good luck!

# Frequently Asked Questions

### What if I have two assignments? How many bugs should I report? How to organize Additional Project Improvements?

Treat both assignments **independently**. For instance, if you have been assigned to both **Front-End** and **API** areas, you should:

- Report at maximum 5 **Front-End** issues
- Report at maximum 5 **API** issues
- Create an issue listing additional project improvements related to **Front-End** aspects
- Create an issue listing additional project improvements related to **API** aspects

In order to distinguish issues, you can:

- Add a prefix in the issue title specifying the area. Examples:
  - `[API] Some bug report title`
  - `[Front-End] Additional Project Improvements`
- Use [GitHub labels](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/managing-labels)

### The API assignment asks for tests in Ruby, can I use a different programming language?

If the recruiter didn't specified that the API assignment can be done in a different language, take your time and try your best to deliver a simple solution. Libraries such as [httparty](https://github.com/jnunemaker/httparty) and [airborne](https://github.com/brooklynDev/airborne) are commonly used for that purpose and might be a good starting point.
