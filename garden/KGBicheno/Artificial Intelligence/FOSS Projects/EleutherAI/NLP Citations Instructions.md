# NLP Citations Instructions

See the [[EleutherAI Main Page]] or the [[Artificial Intelligence/FOSS Projects/EleutherAI/NLP Citations for 'The Pile']]

This project is part of the "The Pile" project with the EleutherAI group.

## Instructions from StellaAthena

The following papers introduce datasets to be used for machine learning research, mostly natural language processing. I am interested in a list of papers that use each dataset for NLP research. If more than five NLP papers have used the dataset, limiting the list to five entries is fine. In that case, listing papers published in different years would be preferred. If there is a central website or repository that links to papers that use this data, that would work as well.

**Project Gutenberg-19**: https://arxiv.org/abs/1911.05507
**OpenSubtitles**: https://www.aclweb.org/anthology/L16-1559/
**DeepMind Mathematics**: https://arxiv.org/abs/1904.01557
**BookCorpus**: https://arxiv.org/abs/1506.06724
**EuroParl**: https://www.statmt.org/europarl/
**Enron Emails**: http://nyc.lti.cs.cmu.edu/yiming/Publications/klimt-ecml04.pdf

I would like the list in the form of bibtex citations. If you're not familiar with bibtex, it's an add-on to LaTeX that handles citation management. The following format should handle any papers you find (if you find sources that don't fit, let me know):

For conference proceedings, use:

```bibtex
@inproceedings{OpenSubtitles2,
  title={The Name of the Paper Goes Here},
  author={Lastname, Firstname and Lastname, Firstname and Lastname, Firstname},
  booktitle={7th Annual Conference on Research and Other Stuff (CROS-2019)},
  organization={The name of the group that puts on the conference},
  url = {A link to the official copy of the paper on the conference website},
  year={2019}
}
```

For journal articles, use: 

```bibtex
@article{PG19-3,
  title = {The Name of the Paper},
  author = {Lastname, Firstname and Lastname, Firstname and Lastname, Firstname}
  journal = {The Name of the Journal},
  url = {A link to the official copy of the paper on the journal website},
  year = {Year of publication}
}
```

In the first line a paper identifier goes after the braces. The paper identifier should be the name of the dataset followed by a number. Please number them chronologically within dataset, so for Project Gutenberg the five papers would have identifiers `GP19-1`, `PG19-2`, `PG19-3`, `PG19-4`, `PG19-5`, where `PG19-1` is the first paper chronologically and `PG19-5` is the last. Please also add the paper that introduced the data labeled with the dataset without a number. In this case, it would be just `PG19`.

If the paper has not been accepted for publication anywhere but has a preprint on arXiv, that is still acceptable to cite if there aren't papers that have been accepted for publication. To cite an arXiv paper, fill it out as if you are citing a journal article and write the journal line as shown here:

```bibtex
@article{nlp-bias-survey,
  title={Language (Technology) is Power: A Critical Survey of "Bias" in NLP},
  author={Blodgett, Su Lin and Barocas, Solon and Daum{\'e} III, Hal and Wallach, Hanna},
  journal={arXiv preprint arXiv:2005.14050},
  year={2020}
}
```

The number 2005.14050 is the arXiv ID number and can be found in the url. The above paper's url is https://arxiv.org/abs/2005.14050

This is indirectly in support of the Pile paper, as we are releasing a datasheet that documents various aspects of the data. The datasheet will probably not be published, but it will be put on arXiv and (we hope) cited. 

I am planning on thanking you for collecting this information in the acknowledgements, but if you would like to receive authorship credit let me know and we can talk about it. I am not opposed to adding additional authors, but to receive authorship credit you'd have to do some writing about the datasets in addition to collecting this info.