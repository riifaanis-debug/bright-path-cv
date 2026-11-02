<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- The CV site's components/data under src/components and src/data were ported verbatim from the source repo; keep its original styling. Why: user asked for an exact copy.
- Large PDFs live as lovable-assets URLs (src/assets/docs/*.asset.json). Why: repo has a 10 MB per-file limit.
- Magazine certificate images are read from the asset pointers in src/assets/certificates by the generator; render them locally from temporary downloads. Why: preserve original resolution without adding uploaded binaries to the repository.
