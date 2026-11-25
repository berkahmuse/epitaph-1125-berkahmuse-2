# Nobody Believed I Was Dying — Famous Last Words

[![make.fun](https://make.fun/badge/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406.svg)](https://make.fun/bounty/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406)
[![Rank](https://make.fun/badge/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406/berkahmuse/epitaph-1125-berkahmuse-2/rank.svg)](https://make.fun/bounty/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406)
[![Reward](https://make.fun/badge/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406/berkahmuse/epitaph-1125-berkahmuse-2/reward.svg)](https://make.fun/bounty/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406)

Entry for the [Famous Last Words: The Funniest Epitaph](https://make.fun/bounty/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406) bounty on [make.fun](https://make.fun).

## The epitaph

> Nobody believed I was dying until they carved it in stone.

One line, 58 characters. A dying man ignored in life, believed only once
the words were literally carved in stone — the joke turns on the double
meaning of "carved in stone", and it reads exactly like something chiselled
onto a tombstone.

## How it works

`main.ts` (Node 22+) writes the epitaph deterministically to
`/output/entry.txt`. It first gates the line the way the sealed scorer
does: 1–150 characters, not only whitespace, a single line — and fails
loudly instead of ever writing an invalid entry.

```sh
node main.ts
cat /output/entry.txt
```

Two runs produce byte-identical output
(sha256 `e5ccc924940fa79751c211bcf158648e5048aa32fe13346b58131b4e533ffe68`).

## License

MIT — see [LICENSE](LICENSE).
