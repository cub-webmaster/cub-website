# Setting up

For ease of use of those less comfortable with coding or might not want to set up their own IDE, see the section on the [GitHub Codespace](#octocat-github-codespace) to get started. For those who are more advanced and would like to develop locally use their own IDE, go [Local Setup](#️-local-setup) instead.

## :octocat: GitHub Codespace

GitHub provides an online editor with everything you need to effectively make edits to the codebase with minimal setup.

To access this, first ensure that you are logged into the cub-webmaster GitHub account (or any other GitHub account with access) navigate to the front page of this codebase. Click the `Code` button on the top right corner of the main section and choose the codespaces tab.

<!-- TODO add pic here -->

Now click the `Create codespace on main` button to set up the IDE. It would take a few minutes to load, but this has already been configured to install everything you would need for this codespace, so you can start making your edits right away without thinking too much about downloading the right tools. (For those interested, the relevant configuration for this is in the `.devcontainer` directory)

> [!CAUTION]
> Note that free usage of codespaces is limited and the webmaster account will be charged if usage exceeds the limits detailed [here](https://docs.github.com/en/billing/concepts/product-billing/github-codespaces#free-and-billed-use-by-personal-accounts). For major changes that will take a long time it is recommended to use a local setup instead.

### :white_check_mark: Checking and Comitting Your Changes

Once you are satisfied with your edits, run the following command in the terminal.

```bash
    yarn dev
```

<!--TODO add pic-->

This will give you a preview of the website with the edits you've made. Make sure to check that everything looks as expected before committing your changes.

Once you've committed your changes to the main branch, you can open a pull request (PR) directly in the codespace by following the guidance [here](https://docs.github.com/en/codespaces/developing-in-a-codespace/using-source-control-in-your-codespace#raising-a-pull-request). Remember that you have to open a PR and merge it into the live branch for your changes to reflect in the actual website.

More on Git related best practices and the basics of this codebase [here](basics.md).

When you're done with the codespace, make sure to delete it so it doesn't take up space on the cloud for a long time, which can end up getting you charged (see warning above on free usage limits).

## :desktop_computer: Local Setup

To set up development on a local environment, first make sure that you have ALL of the following installed on your machine:

- [Git](https://git-scm.com/install/)
- [Node](https://nodejs.org/en/download) - version 24 onwards is fine
- [Yarn](https://yarnpkg.com/getting-started/install) - make sure you are using 4.x and not 1.x, it WILL break things

And of course, make sure you have a copy of your IDE of choice. I recommend Visual Studio Code as it is a great free IDE with lots of extensions that will make your life easier when working with this codebase.

Next, you might want to set up SSH with GitHub make it easier to push changes etc. You can find a guide on how to set it up here if you're not sure how to do that. Otherwise, you should still be able to do most things you need through HTTPS instead (you just have to enter your password everytime).

> [!NOTE]
> If you plan to use SSH, please do so on a personal account so you don't accidentally handover your key to the next webmaster.

Now you should be able to run the following commands to set up your environment fully:

```bash

# STEP 1
# clone repo via ssh
git clone git@github.com:cub-webmaster/cub-website.git
# OR clone repo via https
git clone https://github.com/cub-webmaster/cub-website.git


# STEP 2
# install dependencies
yarn install

# STEP 3
# check that website runs fine locally
yarn dev
```

And that's it! There are also some recommended vscode extensions listed in `.vscode/extensions.json` to make your development experience better, but otherwise you are ready to move on to [familiarising yourself with codebase](basics.md).
