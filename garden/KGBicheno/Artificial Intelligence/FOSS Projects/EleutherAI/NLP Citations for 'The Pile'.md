# NLP Citations for 'The Pile'

## Project Gutenberg-19

Original link: https://arxiv.org/abs/1911.05507

```bibtex
@misc{rae2019compressive,
      title={Compressive Transformers for Long-Range Sequence Modelling}, 
      author={Jack W. Rae and Anna Potapenko and Siddhant M. Jayakumar and Timothy P. Lillicrap},
      year={2019},
      eprint={1911.05507},
      archivePrefix={arXiv},
      primaryClass={cs.LG}
}
```

### PG19-1

URL: https://proceedings.neurips.cc/paper/2020/file/c8512d142a2d849725f31a9a7a361ab9-Paper.pdf

```bibtex
@article{zaheer2020big,
  title={Big bird: Transformers for longer sequences},
  author={Zaheer, Manzil and Guruganesh, Guru and Dubey, Kumar Avinava and Ainslie, Joshua and Alberti, Chris and Ontanon, Santiago and Pham, Philip and Ravula, Anirudh and Wang, Qifan and Yang, Li and others},
  journal={Advances in Neural Information Processing Systems},
  volume={33},
  year={2020}
}
```

Usage: In this paper introducing the BIGBIRD Transformer, the authors compare their new model's performance in solving the problem of quadratic time undermining the usefulness of large Transformers to existing models such as the process introduced by Rae et al (2020) with PG-19.

### PG19-2

URL: https://arxiv.org/abs/2009.14794


```bibtex
@misc{choromanski2020rethinking,
      title={Rethinking Attention with Performers}, 
      author={Krzysztof Choromanski and Valerii Likhosherstov and David Dohan and Xingyou Song and Andreea Gane and Tamas Sarlos and Peter Hawkins and Jared Davis and Afroz Mohiuddin and Lukasz Kaiser and David Belanger and Lucy Colwell and Adrian Weller},
      year={2020},
      eprint={2009.14794},
      archivePrefix={arXiv},
      primaryClass={cs.LG}
}
```

Usage: The authors present the PG-19 dataset as "a long-range text modelling task" (2020, p15). They compare the original tokenisation of PG-19 to their own tokenisation method and take the dataset's log likelihood multpiiers before calculating the perplexities involved. The paper uses PG-19 as part of demonstrating 'Performers', transformer architectures for estimating the accuracy of softmax full-rank-attention Transformers but using only linear space and time complexity, not quadratic.

### PG19-3

URL: https://arxiv.org/abs/2004.13637

```bibtex
@misc{roller2020recipes,
      title={Recipes for building an open-domain chatbot}, 
      author={Stephen Roller and Emily Dinan and Naman Goyal and Da Ju and Mary Williamson and Yinhan Liu and Jing Xu and Myle Ott and Kurt Shuster and Eric M. Smith and Y-Lan Boureau and Jason Weston},
      year={2020},
      eprint={2004.13637},
      archivePrefix={arXiv},
      primaryClass={cs.CL}
}
```

Usage: The authors describe their bots' inability to learn about the agent with whom they are chatting, comparing the decision by Rae et al (2020), to use "extended neural architectures to process longer contexts" with the authors' decision not to, and their belief that the evaluation setup used by the longer-context paper was not the right one for measuring their success in this paper.

### PG19-4

URL: https://dl.acm.org/doi/abs/10.1145/3394171.3413671

```bibtex
@inproceedings{10.1145/3394171.3413671,
author = {Huang, Yu-Siang and Yang, Yi-Hsuan},
title = {Pop Music Transformer: Beat-Based Modeling and Generation of Expressive Pop Piano Compositions},
year = {2020},
isbn = {9781450379885},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/3394171.3413671},
doi = {10.1145/3394171.3413671},
booktitle = {Proceedings of the 28th ACM International Conference on Multimedia},
pages = {1180–1188},
numpages = {9},
keywords = {automatic music composition, transformer, neural sequence model},
location = {Seattle, WA, USA},
series = {MM '20}
}
```

Usage: The paper compares the use of existing text corpora, including PG19, with their own metrical structure for feeding classical music into Transformers to create AI-generated compositions. In this specific case the comparison is with a pop piano piece built with their Pop Music Transformer.

### PG19-5

URL: https://ieeexplore.ieee.org/abstract/document/9054324?casa_token=W4TddydXbMcAAAAA:GAdsuoNU7zypmx7C2tzbCULBEXhm2cDGqupSgMROyNLUotNZg0AjD9iUO_CFxD2BSfFYFLbhCIQ4

```bibtex
@INPROCEEDINGS{9054324,  
author={K. {Irie} and A. {Gerstenberger} and R. {Schlüter} and H. {Ney}},  
booktitle={ICASSP 2020 - 2020 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)},   
title={How Much Self-Attention Do We Needƒ Trading Attention for Feed-Forward Layers},   
year={2020},  
volume={},  
number={},  
pages={6154-6158},  
doi={10.1109/ICASSP40776.2020.9054324}}
```

Irie et al (2020) propose a simple architectural modification when using Transformers to deal with the large states that need to be stored at evaluation time when scaling those models up. This paper aims to show how the traditionally high-performance large Transformer-type models can maintain that performance without the poor scaling of state management during evaluation.

### Full list of found citations

| Title | URL |
| ---------------------- | ---- |
| Big bird: Transformers for longer sequences | https://proceedings.neurips.cc/paper/2020/file/c8512d142a2d849725f31a9a7a361ab9-Paper.pdf |
| Longformer: The long-document transformer | https://arxiv.org/abs/2004.05150 |
| Efficient transformers: A survey | https://arxiv.org/abs/2009.06732 |
| Pop Music Transformer: Beat-based modeling and generation of expressive Pop piano compositions | https://dl.acm.org/doi/abs/10.1145/3394171.3413671 |
| Rethinking attention with performers | https://arxiv.org/abs/2009.14794 |
| How Much Self-Attention Do We Needƒ Trading Attention for Feed-Forward Layers | https://ieeexplore.ieee.org/abstract/document/9054324/?casa_token=W4TddydXbMcAAAAA:GAdsuoNU7zypmx7C2tzbCULBEXhm2cDGqupSgMROyNLUotNZg0AjD9iUO_CFxD2BSfFYFLbhCIQ4 |
| Recipes for building an open-domain chatbot | https://arxiv.org/abs/2004.13637 |
| Do Transformers Need Deep Long-Range Memory | https://arxiv.org/abs/2007.03356 |
| Sparse Sinkhorn Attention | https://arxiv.org/abs/2002.11296 |
| Improving Transformer Models by Reordering their Sublayers | https://arxiv.org/abs/1911.03864 |
| HiPPO: Recurrent Memory with Optimal Polynomial Projections | https://proceedings.neurips.cc/paper/2020/hash/102f0bb6efb3a6128a3c750dd16729be-Abstract.html |
| Training with Quantization Noise for Extreme Fixed-Point Compression | https://arxiv.org/abs/2004.07320 |
| Streaming Transformer-based Acoustic Models Using Self-attention with Augmented Memory | https://arxiv.org/abs/2005.08042 |
| ProGen: Language Modeling for Protein Generation | https://arxiv.org/abs/2004.03497 |
| Beyond 512 Tokens: Siamese Multi-depth Transformer-based Hierarchical Encoder for Document Matching | https://arxiv.org/abs/2004.12297 |
| Zero-shot Entity Linking with Efficient Long Range Sequence Modeling | https://arxiv.org/abs/2010.06065 |
| CogLTX: Applying BERT to Long Texts | https://proceedings.neurips.cc/paper/2020/hash/96671501524948bc3937b4b30d0e57b9-Abstract.html |
| The Deep Convolutional Neural Network for NOx Emission Prediction of a Coal-Fired Boiler | https://ieeexplore.ieee.org/abstract/document/9086502/ |
| Accessing Higher-level Representations in Sequential Transformers with Feedback Memory | https://arxiv.org/abs/2002.09402 |
| Masked Language Modeling for Proteins via Linearly Scalable Long-Context Transformers | https://arxiv.org/abs/2006.03555 |
| Capturing Longer Context for Document-level Neural Machine Translation: A Multi-resolutional Approach | https://arxiv.org/abs/2010.08961 |
| ETC: Encoding Long and Structured Inputs in Transformers | https://www.aclweb.org/anthology/2020.emnlp-main.19.pdf |
| Stepwise Extractive Summarization and Planning with Structured Transformers | https://arxiv.org/abs/2010.02744 |
| Transformers for limit order books | https://arxiv.org/abs/2003.00130 |
| Advancing Neural Language Modeling in Automatic Speech Recognition | http://publications.rwth-aachen.de/record/789081/files/789081.pdf |
| ETC: Encoding Long and Structured Data in Transformers | https://arxiv.org/abs/2004.08483 |
| Cluster-former: Clustering-based sparse transformer for long-range dependency encoding | https://arxiv.org/abs/2009.06097 |
| Exploring Transformers for Large-Scale Speech Recognition | https://arxiv.org/abs/2005.09684 |
| Transformer-based Long-context End-to-end Speech Recognition | https://www.merl.com/publications/docs/TR2020-139.pdf |
| GMAT: Global Memory Augmentation for Transformers | https://arxiv.org/abs/2006.03274 |
| Beyond 512 Tokens: Siamese Multi-depth Transformer-based Hierarchical Encoder for Long-Form Document Matching | https://dl.acm.org/doi/abs/10.1145/3340531.3411908 |
| Multi-scale Transformer Language Models | https://arxiv.org/abs/2005.00581 |
| Attending to Long-Distance Document Context for Sequence Labeling | https://www.aclweb.org/anthology/2020.findings-emnlp.330/ |
| HUSH: A Dataset and Platform for Human-in-the-Loop Story Generation | https://www.aclweb.org/anthology/2020.emnlp-main.525.pdf |
| STORIUM: A Dataset and Evaluation Platform for Machine-in-the-Loop Story Generation | https://arxiv.org/abs/2010.01717 |
| Network Representation Learning Based on Topological Structure and Vertex Attributes | https://link.springer.com/chapter/10.1007/978-3-030-58112-1_33 |
| Memformer: The Memory-Augmented Transformer | https://arxiv.org/abs/2010.06891 |

## OpenSubtitles

Original link: https://www.aclweb.org/anthology/L16-1559/

```bibtex
@inproceedings{tiedemann2016finding,
  title={Finding alternative translations in a large corpus of movie subtitle},
  author={Tiedemann, J{\"o}rg},
  booktitle={Proceedings of the Tenth International Conference on Language Resources and Evaluation (LREC'16)},
  pages={3518--3522},
  year={2016}
}
```

### OSub-1

Information Extraction from TV Series Scripts for Uptake Prediction
Original URL: https://openrepository.aut.ac.nz/handle/10292/10968

```bibtex
@phdthesis{wang2017information,
  title={Information Extraction from TV Series Scripts for Uptake Prediction},
  author={Wang, Junshu},
  year={2017},
  school={Auckland University of Technology}
}
```

Wang and Junshu (2017) used IMDB, script websites, and the OpenSubtitles2016 corpus to extract features from pilot episodes in an attempt to create a predictive model of whether or not a pilot script would be green-lit. They admit, however, that the results were not as compelling as was hoped, and the paper has been cited only twice.

### OSub-2

Paraphrase Detection on Noisy Subtitles in Six Languages
Original URL: https://arxiv.org/abs/1809.07978

```bibtex
@misc{sjöblom2018paraphrase,
      title={Paraphrase Detection on Noisy Subtitles in Six Languages}, 
      author={Eetu Sjöblom and Mathias Creutz and Mikko Aulamo},
      year={2018},
      eprint={1809.07978},
      archivePrefix={arXiv},
      primaryClass={cs.CL}
}
```

This paper describes the results from a paraphrase detection model they had created, once with a Word-Averaging (WA) model and once with a Gated Recurrent Averaging Network (GRAN). Of the two approaches, the GRAN proved vastly more effective and showed better results when more, noisy data was used rather than less, cleaner data.

### OSub-3

PassPort: A Dependency Parsing Model for Portuguese
Original URL: https://link.springer.com/chapter/10.1007/978-3-319-99722-3_48

```bibtex
@InProceedings{10.1007/978-3-319-99722-3_48,
author="Zilio, Leonardo and Wilkens, Rodrigo and Fairon, C{\'e}drick",
editor="Villavicencio, Aline and Moreira, Viviane and Abad, Alberto and Caseli, Helena and Gamallo, Pablo and Ramisch, Carlos and Gon{\c{c}}alo Oliveira, Hugo and Paetzold, Gustavo Henrique",
title="PassPort: A Dependency Parsing Model for Portuguese",
booktitle="Computational Processing of the Portuguese Language",
year="2018",
publisher="Springer International Publishing",
address="Cham",
pages="479--489",
isbn="978-3-319-99722-3"
}

```

This paper outlines how PassPort was created in the context of previous NLP translation models and its parser created using the Stanford Parser. PassPort's cited UAS scores are both between 85% and 90% against the Universal Dependencies corpus. While PassPort achieved a slightly better score compared with PALAVRAS, but the authors admitted a bottleneck in part-of-speech tagging.

### OSub-4

Distill, Adapt, Distill: Training Small, In-Domain Models for Neural Machine Translation
Original URL: https://arxiv.org/abs/2003.02877

```bibtex
@misc{gordon2020distill,
      title={Distill, Adapt, Distill: Training Small, In-Domain Models for Neural Machine Translation}, 
      author={Mitchell A. Gordon and Kevin Duh},
      year={2020},
      eprint={2003.02877},
      archivePrefix={arXiv},
      primaryClass={cs.CL}
}
```

Gordon and Duh (2020) released this paper that suggests a double-distillation process for machine translation models that require memory efficiency. Their method describes a general distillation process followed by an in-domain distillation across domain adaption and knowledge distillation use-cases.

### OSub-5

Tilde at WMT 2020: News Task Systems
Original URL: https://arxiv.org/abs/2010.15423

```bibtex
@article{krivslauks2020tilde,
  title={Tilde at WMT 2020: News Task Systems},
  author={Kri{\v{s}}lauks, Rihards and Pinnis, M{\=a}rcis},
  journal={arXiv preprint arXiv:2010.15423},
  year={2020}
}
```

This WMT2020 submission describes further work being conducted on translating News content for both directions in the English-Polish language pair. The team used the Marian machine translation toolkit and experimented with muiltiple methodologies before providing both a 'Transformer base' and 'Transformer big' model for others to use.

### Full list of found citations

| Title | URL |
| ----------------------------------------- | -------------------------------------------------- |
| Information Extraction from TV Series Scripts for Uptake Prediction | https://openrepository.aut.ac.nz/handle/10292/10968 |
| Paraphrase Detection on Noisy Subtitles in Six Languages | https://arxiv.org/abs/1809.07978 |
| PassPort: A Dependency Parsing Model for Portuguese | https://link.springer.com/chapter/10.1007/978-3-319-99722-3_48 |
| Distill, Adapt, Distill: Training Small, In-Domain Models for Neural Machine Translation | https://arxiv.org/abs/2003.02877 |
| Tilde at WMT 2020: News Task Systems | https://arxiv.org/abs/2010.15423 |
| Mapping physical stores using google street view | https://upcommons.upc.edu/handle/2117/329699 |
| Creating a frequency dictionary of spoken Hebrew : a reproducible use of technology to overcome scarcity of data | https://repositories.lib.utexas.edu/handle/2152/72487 |
| Toward automatic improvement of language produced by non-native language learners | https://ep.liu.se/ecp/article.asp?issue=164&article=003&volume= |
| EMPAC: an English–Spanish Corpus of Institutional Subtitles | https://www.aclweb.org/anthology/2020.lrec-1.498/ |
| SMILLE for Portuguese: Annotation and Analysis of Grammatical Structures in a Pedagogical Context | https://link.springer.com/chapter/10.1007/978-3-319-99722-3_2 |
| Designing the Business Conversation Corpus | https://arxiv.org/abs/2008.01940 |
| CoTK: An Open-Source Toolkit for Fast Development and Fair Evaluation of Text Generation | https://arxiv.org/abs/2002.00583 |
| Coursera Corpus Mining and Multistage Fine-Tuning for Improving Lectures Translation | https://arxiv.org/abs/1912.11739 |
| Measuring the Effect of Conversational Aspectson Machine Translation Quality | https://www.aclweb.org/anthology/C16-1242.pdf |
| JESC: Japanese-English Subtitle Corpus | https://arxiv.org/abs/1710.10639 |
| Large-Scale Machine Translation between Arabic and Hebrew: Available Corpora and Initial Results | https://arxiv.org/abs/1609.07701 |
| Phrase-Based SMT for Finnish with More Data, Better Models andAlternative Alignment and Translation Tools | https://www.aclweb.org/anthology/W16-2326.pdf |
| OpenSubtitles2016: Extracting Large Parallel Corpora from Movie and TV Subtitles | https://www.duo.uio.no/handle/10852/50459 |
| OpenSubtitles2018: Statistical Rescoring of SentenceAlignments in Large, Noisy Parallel Corpora | https://helda.helsinki.fi/bitstream/handle/10138/313211/L18_1275.pdf?sequence=1 |
| Freezing Subnetworks to Analyze Domain Adaptation in Neural Machine Translation | https://arxiv.org/abs/1809.05218 |

## DeepMind Mathematics

Original URL: https://arxiv.org/abs/1904.01557

```bibtex
@article{saxton2019analysing,
  title={Analysing mathematical reasoning abilities of neural models},
  author={Saxton, David and Grefenstette, Edward and Hill, Felix and Kohli, Pushmeet},
  journal={arXiv preprint arXiv:1904.01557},
  year={2019}
}
```

### DMM-1

Simulating Problem Difficulty in Arithmetic Cognition Through Dynamic Connectionist Models
Original URL: https://s-space.snu.ac.kr/handle/10371/161629

```bibtex
@article{cho2019simulating,
  title={Simulating Problem Difficulty in Arithmetic Cognition Through Dynamic Connectionist Models},
  author={Cho, Sungjae and Lim, Jaeseo and Hickey, Chris and Park, Jung and Zhang, Byoung-Tak},
  journal={arXiv preprint arXiv:1905.03617},
  year={2019}
}
```

This study used addition and subtraction problems from the DMM to analyse the differences and similarities between humans and RNNs in tackling these problems, as well as gauging the difficulty curve experienced by both species as problem complexity increased. The paper finds a striking number of similarities between humans and machines using the Jordan network model.

### DMM-2

Human-like machine thinking: Language guided imagination
Original URL: https://arxiv.org/abs/1905.07562

```bibtex
@misc{qi2019humanlike,
      title={Human-like machine thinking: Language guided imagination}, 
      author={Feng Qi and Wenchuan Wu},
      year={2019},
      eprint={1905.07562},
      archivePrefix={arXiv},
      primaryClass={cs.CL}
}
```

This paper by Qi and Wu (2019) attempts to create an Language Guided Imagination (LGI) — a new model architecture where neural networks combine three human-like internal processes to enable a machine to construct fictitious mental scenarios as a source of reasoning and memory. They hope that this construction would enable a machine to possess general intelligence.

### DMM-3

Leap-Of-Thought: Teaching Pre-Trained Models to Systematically Reason Over Implicit Knowledge
Original URL: https://proceedings.neurips.cc/paper/2020/hash/e992111e4ab9985366e806733383bd8c-Abstract.html

```bibtex
@article{talmor2020leap,
  title={Leap-Of-Thought: Teaching Pre-Trained Models to Systematically Reason Over Implicit Knowledge},
  author={Talmor, Alon and Tafjord, Oyvind and Clark, Peter and Goldberg, Yoav and Berant, Jonathan},
  journal={Advances in Neural Information Processing Systems},
  volume={33},
  year={2020}
}
```

In this paper, Talmor et al (2020) describe a procedure for automatically generating training sets for training neural networks to reason over both natural language and symbolic facts such as maths. Their end goal is to establish an open-domain system that can improve itself with its own reasoning and simple corrections from user interactions in natural language.

### DMM-4

Joint translation and unit conversion for end-to-end localization
Original URL: https://arxiv.org/abs/2004.05219

```bibtex
@misc{dinu2020joint,
      title={Joint translation and unit conversion for end-to-end localization}, 
      author={Georgiana Dinu and Prashant Mathur and Marcello Federico and Stanislas Lauly and Yaser Al-Onaizan},
      year={2020},
      eprint={2004.05219},
      archivePrefix={arXiv},
      primaryClass={cs.CL}
}
```

Dinu et all (2020) have used unit conversions as an example of NLP tasks needing to switch back and forth between natural and formal language during end-to-end localisation, proposing a data augmentation technique for models used in that context.

### DMM-5

Performance vs. competence in human–machine comparisons
Original URL: https://www.pnas.org/content/117/43/26562.short

```bibtex
@article {Firestone26562,
	author = {Firestone, Chaz},
	title = {Performance vs. competence in human{\textendash}machine comparisons},
	volume = {117},
	number = {43},
	pages = {26562--26571},
	year = {2020},
	doi = {10.1073/pnas.1905334117},
	publisher = {National Academy of Sciences},
	issn = {0027-8424},
	URL = {https://www.pnas.org/content/117/43/26562},
	eprint = {https://www.pnas.org/content/117/43/26562.full.pdf},
	journal = {Proceedings of the National Academy of Sciences}
}
```

The DeepMind Mathmatics corpus forms part of the tasks compared in Chaz Firestone's (2020) paper arguing for a change to the broader conception of species difference when humans and AIs fail at certain tasks such as maths. Chaz draws on cognitive science to argue that the destinction between competence and performance must be addressed for a more "species-fair" comparison between humans and machines. 

### Full list of found citations

| Title | URL |
| ----------------------------------------- | -------------------------------------------------- |
| Joint translation and unit conversion for end-to-end localization | https://arxiv.org/abs/2004.05219 |
| Leap-Of-Thought: Teaching Pre-Trained Models to Systematically Reason Over Implicit Knowledge | https://proceedings.neurips.cc/paper/2020/hash/e992111e4ab9985366e806733383bd8c-Abstract.html |
| Performance vs. competence in human–machine comparisons | https://www.pnas.org/content/117/43/26562.short |
| Simulating Problem Difficulty in Arithmetic Cognition Through Dynamic Connectionist Models | http://s-space.snu.ac.kr/handle/10371/161629 |
| Human-like machine thinking: Language guided imagination | https://arxiv.org/abs/1905.07562 |
| Automatic load sharing of distribution transformer for overload protection | https://link.springer.com/article/10.1186/s13104-019-4880-1 |
| Semi-Lexical Languages -- A Formal Basis for Unifying Machine Learning and Symbolic Reasoning in Computer Vision | https://arxiv.org/abs/2004.12152 |
| Analyzing Elementary School Olympiad Math Tasks as a Benchmark for AGI | https://link.springer.com/chapter/10.1007/978-3-030-52152-3_29 |
| Humans Keep It One Hundred: an Overview of AI Journey | https://www.aclweb.org/anthology/2020.lrec-1.277/ |
| Domain Adversarial Fine-Tuning as an Effective Regularizer | https://arxiv.org/abs/2009.13366 |
| Recurrent Inference in Text Editing | https://arxiv.org/abs/2009.12643 |
| Automatic diagnosis of the 12-lead ECG using a deep neural network | https://deeplearn.org/arxiv/126517/automatic-diagnosis-of-the-12-lead-ecg-using-a-deep-neural-network |
| Transformer Model for Mathematical Reasoning -CS 230 Final Report | cs230.stanford.edu/projects_fall_2019/reports/26258425.pdf |
| Deep Differential System Stability -- Learning advanced computations from examples | https://arxiv.org/abs/2006.06462 |
| Are Neural Nets Modular? Inspecting Functional Modularity Through Differentiable Weight Masks | https://arxiv.org/abs/2010.02066 |
| Solving Arithmetic Word Problems with a Templatebased Multi-Task Deep Neural Network (T-MTDNN) | https://ieeexplore.ieee.org/abstract/document/9070660?casa_token=-WcJO6qvkLoAAAAA:At_wCuHMToaqSqC1WkzKE69FrRSULJ2ajUNtbMFXdc4t7Ns7eiS2ocFarXjQ2mQ4NOdOmiBY18Sw |
| Semantic similarity and machine learning with ontologies. | https://repository.kaust.edu.sa/handle/10754/665622 |
| Machine learning with biomedical ontologies | https://repository.kaust.edu.sa/handle/10754/663430 |
| Do Neural Models Learn Systematicity of Monotonicity Inference in Natural Language? | https://arxiv.org/abs/2004.14839 |
| Emergence of Syntax Needs Minimal Supervision | https://arxiv.org/abs/2005.01119 |
| Towards Question Format Independent Numerical Reasoning: A Set of Prerequisite Tasks | https://arxiv.org/abs/2005.08516 |
| Achieving Machine Reasoning for Math ProblemsThrough Step-By-Step Supervision Signal | cs229.stanford.edu/proj2019spr/report/51.pdf |
| NeuReduce: Reducing Mixed Boolean-Arithmetic Expressions by Recurrent Neural Network | https://www.aclweb.org/anthology/2020.findings-emnlp.56/ |
| Compositional Generalization by Learning Analytical Expressions | https://papers.nips.cc/paper/2020/hash/83adc9225e4deb67d7ce42d58fe5157c-Abstract.html |
| Leap-Of-Thought: Teaching Pre-Trained Models to Systematically Reason Over Implicit Knowledge | https://arxiv.org/abs/2006.06609 |
| Artificial General Intelligence: A New Perspective, with Application to Scientific Discovery | https://engrxiv.org/duz8g/ |
| Generative Language Modeling for Automated Theorem Proving | https://arxiv.org/abs/2009.03393 |
| First Symposium on Artificial Intelligence for Mathematics Education. Book of Abstracts (AI4ME 2020) | https://books.google.com.au/books?hl=en&lr=&id=_MoHEAAAQBAJ&oi=fnd&pg=PA40&ots=2rsgW71otf&sig=nIl1BTZtz-5yy7UJLbZu_YU2OSg&redir_esc=y#v=onepage&q&f=false |
| Scaling Laws for Autoregressive Generative Modeling | https://arxiv.org/abs/2010.14701 |
| The Challenge of Modeling the Acquisition of Mathematical Concepts | https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7099599/ |
| Enhancing the Numeracy of Word Embeddings: A Linear Algebraic Perspective | https://link.springer.com/chapter/10.1007/978-3-030-60450-9_14 |
| Neural Status Registers | https://arxiv.org/abs/2004.07085 |
| EXAMS: A Multi-Subject High School Examinations Dataset for Cross-Lingual and Multilingual Question Answering | https://arxiv.org/abs/2011.03080 |
| Bongard-LOGO: A New Benchmark for Human-Level Concept Learning and Reasoning | https://proceedings.neurips.cc/paper/2020/hash/bf15e9bbff22c7719020f9df4badc20a-Abstract.html |
| Solving Arithmetic Problems on a Checkered Paper | aitp-conference.org/2020/abstract/paper_30.pdf |
| Measuring Compositional Generalization: A Comprehensive Method on Realistic Data | https://arxiv.org/abs/1912.09713 |
| Enhancing the Transformer with Explicit Relational Encoding for Math Problem Solving | https://arxiv.org/abs/1910.06611 |
| The Search for Equations – Learning to Identify Similarities Between Mathematical Expressions | https://link.springer.com/chapter/10.1007/978-3-030-46133-1_42 |
| Compositional Generalization with Tree Stack Memory Units | https://arxiv.org/abs/1911.01545 |
| Transformers as Soft Reasoners over Language | https://arxiv.org/abs/2002.05867 |
| Injecting Numerical Reasoning Skills into Language Models | https://arxiv.org/abs/2004.04487 |
| Mathematical reasoning abilities: The Impact of Novick's Learning and Somatic, Auditory, Visual, Intellectual Learning Styles | http://ejournal.radenintan.ac.id/index.php/desimal/article/view/4907 |
| Towards Finding Longer Proofs | https://arxiv.org/abs/1905.13100 |
| Simulating Problem Difficulty in Arithmetic Cognition Through Dynamic Connectionist Models | https://arxiv.org/abs/1905.03617 |
| From Shallow to Deep Interactions Between Knowledge Representation, Reasoning and Machine Learning (Kay R. Amel group) | https://arxiv.org/abs/1912.06612 |
| Machine Number Sense: A Dataset of Visual Arithmetic Problems for Abstract and Relational Reasoning | https://ojs.aaai.org/index.php/AAAI/article/view/5489 |
| Compositionality Decomposed: How do Neural Networks Generalise? | https://www.jair.org/index.php/jair/article/view/11674 |
| Neural Mathematical Solver with Enhanced Formula Structure | https://dl.acm.org/doi/abs/10.1145/3397271.3401227 |
| Modelling High-Level Mathematical Reasoning in Mechanised Declarative Proofs | https://arxiv.org/abs/2006.09265 |
| Visual sense of number vs. sense of magnitude in humans and machines | https://www.nature.com/articles/s41598-020-66838-5 |
| Dataset for Evaluation of Mathematical Reasoning Abilities in Russian | https://link.springer.com/chapter/10.1007/978-3-030-59082-6_10 |
| An Empirical Investigation of Contextualized Number Prediction | https://www.aclweb.org/anthology/2020.emnlp-main.385.pdf |
| Deep Learning for Symbolic Mathematics | https://arxiv.org/abs/1912.01412 |
| What Can Neural Networks Reason About? | https://arxiv.org/abs/1905.13211 |
| Do NLP Models Know Numbers? Probing Numeracy in Embeddings | https://arxiv.org/abs/1909.07940 |
| A Multi-Type Multi-Span Network for Reading Comprehension that Requires Discrete Reasoning | https://arxiv.org/abs/1908.05514 |
| Giving BERT a Calculator: Finding Operations and Arguments with Reading Comprehension | https://arxiv.org/abs/1909.00109 |
| The compositionality of neural networks:integrating symbolism and connectionism | dieuwkehupkes.nl/talks/Saarbrucken18-4-2019.pdf |

## BookCorpus

OriginalURL: https://arxiv.org/abs/1506.06724

```bibtex
@inproceedings{zhu2015aligning,
  title={Aligning books and movies: Towards story-like visual explanations by watching movies and reading books},
  author={Zhu, Yukun and Kiros, Ryan and Zemel, Rich and Salakhutdinov, Ruslan and Urtasun, Raquel and Torralba, Antonio and Fidler, Sanja},
  booktitle={Proceedings of the IEEE international conference on computer vision},
  pages={19--27},
  year={2015}
}
```

### BkCo-1

Deep visual-semantic alignments for generating image descriptions
Original URL: https://www.cv-foundation.org/openaccess/content_cvpr_2015/html/Karpathy_Deep_Visual-Semantic_Alignments_2015_CVPR_paper.html

```bibtex
@inproceedings{karpathy2015deep,
  title={Deep visual-semantic alignments for generating image descriptions},
  author={Karpathy, Andrej and Fei-Fei, Li},
  booktitle={Proceedings of the IEEE conference on computer vision and pattern recognition},
  pages={3128--3137},
  year={2015}
}
```

BookCorpus formed the basis of this model designed to create textual descriptions of images and their compsite regions — a combination of fundamental NLP and Convolutional Neural Nets (CNNs) used in image processing. This paper has been cited 3,876 times and, like BERT, forms a backbone element of one of machine learning's core use-cases, furthing adding to the the gravitas of BookCorpus as a foundational work.

### BkCo-2

Skip-thought vectors
Original URL: https://proceedings.neurips.cc/paper/2015/file/f442d33fa06832082290ad8544a8da27-Paper.pdf

```bibtex
@inproceedings{NIPS2015_f442d33f,
 author = {Kiros, Ryan and Zhu, Yukun and Salakhutdinov, Russ R and Zemel, Richard and Urtasun, Raquel and Torralba, Antonio and Fidler, Sanja},
 booktitle = {Advances in Neural Information Processing Systems},
 editor = {C. Cortes and N. Lawrence and D. Lee and M. Sugiyama and R. Garnett},
 pages = {3294--3302},
 publisher = {Curran Associates, Inc.},
 title = {Skip-Thought Vectors},
 url = {https://proceedings.neurips.cc/paper/2015/file/f442d33fa06832082290ad8544a8da27-Paper.pdf},
 volume = {28},
 year = {2015}
}
```

Members of the team behind the original BookCorpus dataset  were able to create an off-the-shelf encoder evaluated against 8 common NLP tasks — "semantic relatedness, paraphrase detection, image-sentence ranking, question-type classification and 4 benchmark sentiment and subjectivity datasets" (Kiros, et al. 2015) — using the BookCorpus dataset and an approach for unsupervised learning on generic distributed sentences. The encoder used an older encoder-decoder model instead of a more modern Transformer model.

### BkCo-3

Generative adversarial text to image synthesis
Original URL: http://www.jmlr.org/proceedings/papers/v48/reed16.pdf

```bibtex
@article{reed2016generative,
  title={Generative adversarial text to image synthesis},
  author={Reed, Scott and Akata, Zeynep and Yan, Xinchen and Logeswaran, Lajanugen and Schiele, Bernt and Lee, Honglak},
  journal={arXiv preprint arXiv:1605.05396},
  year={2016}
}
```

The IEEE's BookCorpus provided the foundations for Reed et al's seminal 2016 work on the automatic synthesis of realistic images from text despite long-standing incapacity among contemporary AI systems to achieve such a feat. The authors cite many recent advances in recurrent neural network (RNN) architectures as a significant step forward in their work in generative adverserial networks (GANs) using text-to-image models, and have themselves been cited 1,750 times by other papers.

### BkCo-4

Layer Normalisation
Original URL: https://arxiv.org/abs/1607.06450

```bibtex
@misc{ba2016layer,
      title={Layer Normalization}, 
      author={Jimmy Lei Ba and Jamie Ryan Kiros and Geoffrey E. Hinton},
      year={2016},
      eprint={1607.06450},
      archivePrefix={arXiv},
      primaryClass={stat.ML}
}
```

JL Ba et al (2016) demonstrated a much-cited new method of normalising layers in a Recurrent Neural Network (RNN) by taking BookCorpus and processing it once with, and once without their new approach. The results and methods in the Layer Normalisation paper have been cited 2,424 times, showing the reliability of the BookCorpus dataset as a basis for demonstrating new methodologies. 

### BkCo-5

Bert: Pre-training of deep bidirectional transformers for language understanding
Original URL: https://arxiv.org/abs/1810.04805

```bibtex
@article{devlin2018bert,
  title={Bert: Pre-training of deep bidirectional transformers for language understanding},
  author={Devlin, Jacob and Chang, Ming-Wei and Lee, Kenton and Toutanova, Kristina},
  journal={arXiv preprint arXiv:1810.04805},
  year={2018}
}
```

BookCorpus is significant in its use in creating the BERT (Bidirectional Encoder Representations From Transformers) language representation model. The IEEE's corpus is now the upstream basis of a great deal of current leading-edge work on Transformers, especially in the field of NLP, with significant attention coming from Google's own AI researchers. BERT has itself become the basis upon which many of the most-used transformers in NLP are built, with this paper cited 12,472 times. 

### Full list of found citations

|	Title	|	URL	|
|	------------------------------------	|	------------------------------------	|
|	Bert: Pre-training of deep bidirectional transformers for language understanding	|	https://arxiv.org/abs/1810.04805	|
|	Deep visual-semantic alignments for generating image descriptions	|	https://www.cv-foundation.org/openaccess/content_cvpr_2015/html/Karpathy_Deep_Visual-Semantic_Alignments_2015_CVPR_paper.html	|
|	Layer normalization	|	https://arxiv.org/abs/1607.06450	|
|	Skip-thought vectors	|	http://papers.nips.cc/paper/5950-skip-thought-vectors	|
|	Generative adversarial text to image synthesis	|	http://www.jmlr.org/proceedings/papers/v48/reed16.pdf	|
|	Improving language understanding by generative pre-training	|	https://www.cs.ubc.ca/~amuham01/LING530/papers/radford2018improving.pdf	|
|	Supervised learning of universal sentence representations from natural language inference data	|	https://arxiv.org/abs/1705.02364	|
|	Xlnet: Generalized autoregressive pretraining for language understanding	|	http://papers.nips.cc/paper/8812-xlnet-generalized-autoregressive-pretraining-for-language-understanding	|
|	Glue: A multi-task benchmark and analysis platform for natural language understanding	|	https://arxiv.org/abs/1804.07461	|
|	Deep sentence embedding using long short-term memory networks: Analysis and application to information retrieval	|	https://ieeexplore.ieee.org/abstract/document/7389336/	|
|	Multimodal machine learning: A survey and taxonomy	|	https://ieeexplore.ieee.org/abstract/document/8269806/	|
|	End-to-end learning of action detection from frame glimpses in videos	|	http://openaccess.thecvf.com/content_cvpr_2016/html/Yeung_End-To-End_Learning_of_CVPR_2016_paper.html	|
|	An empirical evaluation of doc2vec with practical insights into document embedding generation	|	https://arxiv.org/abs/1607.05368	|
|	Movieqa: Understanding stories in movies through question-answering	|	https://www.cv-foundation.org/openaccess/content_cvpr_2016/html/Tapaswi_MovieQA_Understanding_Stories_CVPR_2016_paper.html	|
|	Vse++: Improving visual-semantic embeddings with hard negatives	|	https://arxiv.org/abs/1707.05612	|
|	Representation learning with contrastive predictive coding	|	https://arxiv.org/abs/1807.03748	|
|	Grounding of textual phrases in images by reconstruction	|	https://link.springer.com/chapter/10.1007/978-3-319-46448-0_49	|
|	Albert: A lite bert for self-supervised learning of language representations	|	https://arxiv.org/abs/1909.11942	|
|	What you can cram into a single vector: Probing sentence embeddings for linguistic properties	|	https://arxiv.org/abs/1805.01070	|
|	Automatic description generation from images: A survey of models, datasets, and evaluation measures	|	https://www.jair.org/index.php/jair/article/view/10985	|
|	Roberta: A robustly optimized bert pretraining approach	|	https://arxiv.org/abs/1907.11692	|
|	Discovering event structure in continuous narrative perception and memory	|	https://www.sciencedirect.com/science/article/pii/S0896627317305937	|
|	Adversarial feature matching for text generation	|	https://arxiv.org/abs/1706.03850	|
|	A corpus and cloze evaluation for deeper understanding of commonsense stories	|	https://www.aclweb.org/anthology/N16-1098.pdf	|
|	Siamese cbow: Optimizing word embeddings for sentence representations	|	https://arxiv.org/abs/1606.04640	|
|	Exploring the limits of transfer learning with a unified text-to-text transformer	|	https://arxiv.org/abs/1910.10683	|
|	Learning general purpose distributed sentence representations via large scale multi-task learning	|	https://arxiv.org/abs/1804.00079	|
|	Swag: A large-scale adversarial dataset for grounded commonsense inference	|	https://arxiv.org/abs/1808.05326	|
|	Unified language model pre-training for natural language understanding and generation	|	http://papers.nips.cc/paper/9464-unified-language-model-pre-training-for-natural-language-understanding-and-generation	|
|	Uncovering the temporal context for video question answering	|	https://link.springer.com/article/10.1007/s11263-017-1033-7	|
|	Linguistic knowledge and transferability of contextual representations	|	https://arxiv.org/abs/1903.08855	|
|	Tgif-qa: Toward spatio-temporal reasoning in visual question answering	|	http://openaccess.thecvf.com/content_cvpr_2017/html/Jang_TGIF-QA_Toward_Spatio-Temporal_CVPR_2017_paper.html	|
|	Connectionist temporal modeling for weakly supervised action labeling	|	https://link.springer.com/chapter/10.1007/978-3-319-46493-0_9	|
|	Movie description	|	https://link.springer.com/content/pdf/10.1007/s11263-016-0987-1.pdf	|
|	Vilbert: Pretraining task-agnostic visiolinguistic representations for vision-and-language tasks	|	http://papers.nips.cc/paper/8297-vilbert-pretraining-task-agnostic-visiolinguistic-representations-for-vision-and-language-tasks	|
|	DistilBERT, a distilled version of BERT: smaller, faster, cheaper and lighter	|	https://arxiv.org/abs/1910.01108	|
|	Generating text via adversarial training	|	https://www.academia.edu/download/52317881/_NIPS.2016.workshop_Generating_Text_via_Adversarial_Training.pdf	|
|	From recognition to cognition: Visual commonsense reasoning	|	http://openaccess.thecvf.com/content_CVPR_2019/html/Zellers_From_Recognition_to_Cognition_Visual_Commonsense_Reasoning_CVPR_2019_paper.html	|
|	Transfertransfo: A transfer learning approach for neural network based conversational agents	|	https://arxiv.org/abs/1901.08149	|
|	Self-taught convolutional neural networks for short text clustering	|	https://www.sciencedirect.com/science/article/pii/S0893608016301976	|
|	The LAMBADA dataset: Word prediction requiring a broad discourse context	|	https://arxiv.org/abs/1606.06031	|
|	The neuro-symbolic concept learner: Interpreting scenes, words, and sentences from natural supervision	|	https://arxiv.org/abs/1904.12584	|
|	Learning generic sentence representations using convolutional neural networks	|	https://arxiv.org/abs/1611.07897	|
|	See, hear, and read: Deep aligned representations	|	https://arxiv.org/abs/1706.00932	|
|	Efficient vector representation for documents through corruption	|	https://arxiv.org/abs/1707.02377	|
|	Language models as knowledge bases?	|	https://arxiv.org/abs/1909.01066	|
|	Sentence encoders on stilts: Supplementary training on intermediate labeled-data tasks	|	https://arxiv.org/abs/1811.01088	|
|	Deep MIML Network.	|	https://cs.nju.edu.cn/zhouzh/zhouzh.files/publication/aaai17deepMIML.pdf	|
|	Vl-bert: Pre-training of generic visual-linguistic representations	|	https://arxiv.org/abs/1908.08530	|
|	Enhancing video summarization via vision-language embedding	|	http://openaccess.thecvf.com/content_cvpr_2017/html/Plummer_Enhancing_Video_Summarization_CVPR_2017_paper.html	|
|	A corpus and evaluation framework for deeper understanding of commonsense stories	|	https://arxiv.org/abs/1604.01696	|
|	Generalized multi-view embedding for visual recognition and cross-modal retrieval	|	https://ieeexplore.ieee.org/abstract/document/8026149/	|
|	HellaSwag: Can a Machine Really Finish Your Sentence?	|	https://arxiv.org/abs/1905.07830	|
|	Improving machine reading comprehension with general reading strategies	|	https://arxiv.org/abs/1810.13441	|
|	Deconvolutional latent-variable model for text sequence matching	|	https://arxiv.org/abs/1709.07109	|
|	Neural text generation in stories using entity representations as context	|	https://www.aclweb.org/anthology/N18-1204.pdf	|
|	What can you do with a rock? affordance extraction via word embeddings	|	https://arxiv.org/abs/1703.03429	|
|	Dynamic meta-embeddings for improved sentence representations	|	https://arxiv.org/abs/1804.07983	|
|	Character-level and multi-channel convolutional neural networks for large-scale authorship attribution	|	https://arxiv.org/abs/1609.06686	|
|	Let your photos talk: Generating narrative paragraph for photo stream via bidirectional attention recurrent neural networks	|	https://dl.acm.org/doi/abs/10.5555/3298239.3298450	|
|	Bert has a mouth, and it must speak: Bert as a markov random field language model	|	https://arxiv.org/abs/1902.04094	|
|	Discourse-based objectives for fast unsupervised sentence representation learning	|	https://arxiv.org/abs/1705.00557	|
|	Learning to write with cooperative discriminators	|	https://arxiv.org/abs/1805.06087	|
|	Learning joint representations of videos and sentences with web image search	|	https://link.springer.com/chapter/10.1007/978-3-319-46604-0_46	|
|	Embedding text in hyperbolic spaces	|	https://arxiv.org/abs/1806.04313	|
|	Probabilistic reasoning via deep learning: Neural association models	|	https://arxiv.org/abs/1603.07704	|
|	Connecting images and natural language	|	http://search.proquest.com/openview/5e0ebbf6c8655a19b94e343f73b89190/1?pq-origsite=gscholar&cbl=18750&diss=y	|
|	Dissent: Sentence representation learning from explicit discourse relations	|	https://arxiv.org/abs/1710.04334	|
|	Dream: A challenge data set and models for dialogue-based reading comprehension	|	https://www.mitpressjournals.org/doi/abs/10.1162/tacl_a_00264	|
|	Sort story: Sorting jumbled images and captions into stories	|	https://arxiv.org/abs/1606.07493	|
|	Creative writing with a machine in the loop: Case studies on slogans and stories	|	https://dl.acm.org/doi/abs/10.1145/3172944.3172983	|
|	Grounding the neurobiology of language in first principles: The necessity of non-language-centric explanations for language comprehension	|	https://www.sciencedirect.com/science/article/pii/S0010027718301707	|
|	Socialiqa: Commonsense reasoning about social interactions	|	https://arxiv.org/abs/1904.09728	|
|	BoolQ: Exploring the surprising difficulty of natural yes/no questions	|	https://arxiv.org/abs/1905.10044	|
|	Probing for semantic evidence of composition by means of simple classification tasks	|	https://www.aclweb.org/anthology/W16-2524.pdf	|
|	What makes a good conversation? how controllable attributes affect human judgments	|	https://arxiv.org/abs/1902.08654	|
|	Assessing composition in sentence vector representations	|	https://arxiv.org/abs/1809.03992	|
|	Neural task graphs: Generalizing to unseen tasks from a single video demonstration	|	http://openaccess.thecvf.com/content_CVPR_2019/html/Huang_Neural_Task_Graphs_Generalizing_to_Unseen_Tasks_From_a_Single_CVPR_2019_paper.html	|
|	Sceneskim: Searching and browsing movies using synchronized captions, scripts and plot summaries	|	https://dl.acm.org/doi/abs/10.1145/2807442.2807502	|
|	Moviegraphs: Towards understanding human-centric situations from videos	|	http://openaccess.thecvf.com/content_cvpr_2018/html/Vicol_MovieGraphs_Towards_Understanding_CVPR_2018_paper.html	|
|	Knowledge enhanced contextual word representations	|	https://arxiv.org/abs/1909.04164	|
|	Virtualhome: Simulating household activities via programs	|	http://openaccess.thecvf.com/content_cvpr_2018/html/Puig_VirtualHome_Simulating_Household_CVPR_2018_paper.html	|
|	Show, Reward and Tell: Automatic Generation of Narrative Paragraph From Photo Stream by Adversarial Training.	|	https://pdfs.semanticscholar.org/977b/eecdf0b5c3487d03738cff501c79770f0858.pdf	|
|	Biva: A very deep hierarchy of latent variables for generative modeling	|	http://papers.nips.cc/paper/8882-biva-a-very-deep-hierarchy-of-latent-variables-for-generative-modeling	|
|	Electra: Pre-training text encoders as discriminators rather than generators	|	https://arxiv.org/abs/2003.10555	|
|	Video summarization by learning deep side semantic embedding	|	https://ieeexplore.ieee.org/abstract/document/8101557/	|
|	Relevance of unsupervised metrics in task-oriented dialogue for evaluating natural language generation	|	https://arxiv.org/abs/1706.09799	|
|	Learning sentence representation with guidance of human attention	|	https://arxiv.org/abs/1609.09189	|
|	Learning visual storylines with skipping recurrent neural networks	|	https://link.springer.com/chapter/10.1007/978-3-319-46454-1_5	|
|	Unsupervised visual-linguistic reference resolution in instructional videos	|	http://openaccess.thecvf.com/content_cvpr_2017/html/Huang_Unsupervised_Visual-Linguistic_Reference_CVPR_2017_paper.html	|
|	D3tw: Discriminative differentiable dynamic time warping for weakly supervised action alignment and segmentation	|	http://openaccess.thecvf.com/content_CVPR_2019/html/Chang_D3TW_Discriminative_Differentiable_Dynamic_Time_Warping_for_Weakly_Supervised_Action_CVPR_2019_paper.html	|
|	Idiom token classification using sentential distributed semantics	|	https://www.aclweb.org/anthology/P16-1019.pdf	|
|	Big bird: Transformers for longer sequences	|	http://proceedings.neurips.cc/paper/2020/hash/c8512d142a2d849725f31a9a7a361ab9-Abstract.html	|
|	Explaining first impressions: Modeling, recognizing, and explaining apparent personality from videos	|	https://arxiv.org/abs/1802.00745	|
|	Bert for joint intent classification and slot filling	|	https://arxiv.org/abs/1902.10909	|
|	An empirical evaluation of visual question answering for novel objects	|	http://openaccess.thecvf.com/content_cvpr_2017/html/Ramakrishnan_An_Empirical_Evaluation_CVPR_2017_paper.html	|
|	Broad context language modeling as reading comprehension	|	https://arxiv.org/abs/1610.08431	|
|	[C] Reducing BERT pre-training time from 3 days to 76 minutes	|		|
|	Ruse: Regressor using sentence embeddings for automatic machine translation evaluation	|	https://www.aclweb.org/anthology/W18-6456.pdf	|
|	An Information-Theoretic Explanation of Adjective Ordering Preferences.	|	http://socsci.uci.edu/~rfutrell/papers/hahn2018information.pdf	|
|	Discourse marker augmented network with reinforcement learning for natural language inference	|	https://arxiv.org/abs/1907.09692	|
|	Quickcut: An interactive tool for editing narrated video	|	https://dl.acm.org/doi/abs/10.1145/2984511.2984569	|
|	Sentence similarity measures for fine-grained estimation of topical relevance in learner essays	|	https://arxiv.org/abs/1606.03144	|
|	Quoref: A reading comprehension dataset with questions requiring coreferential reasoning	|	https://arxiv.org/abs/1908.05803	|
|	Large scale language modeling: Converging on 40gb of text in four hours	|	https://ieeexplore.ieee.org/abstract/document/8645935/	|
|	Beyond caption to narrative: Video captioning with multiple sentences	|	https://ieeexplore.ieee.org/abstract/document/7532983/	|
|	Towards generalizable sentence embeddings	|	https://www.aclweb.org/anthology/W16-1628.pdf	|
|	Large-scale cloze test dataset created by teachers	|	https://arxiv.org/abs/1711.03225	|
|	Compressive transformers for long-range sequence modelling	|	https://arxiv.org/abs/1911.05507	|
|	Unsupervised learning of sentence representations using convolutional neural networks	|	https://www.researchgate.net/profile/Ricardo_Henao3/publication/310769586_Unsupervised_Learning_of_Sentence_Representations_using_Convolutional_Neural_Networks/links/5841a18c08ae8e63e6218fab/Unsupervised-Learning-of-Sentence-Representations-using-Convolutional-Neural-Networks.pdf	|
|	Computer vision and natural language processing: recent approaches in multimedia and robotics	|	https://dl.acm.org/doi/abs/10.1145/3009906	|
|	Poly-encoders: Transformer architectures and pre-training strategies for fast and accurate multi-sentence scoring	|	https://arxiv.org/abs/1905.01969	|
|	Multimodal first impression analysis with deep residual networks	|	https://ieeexplore.ieee.org/abstract/document/8031881/	|
|	Representing sentences as low-rank subspaces	|	https://arxiv.org/abs/1704.05358	|
|	Multitask learning for cross-domain image captioning	|	https://ieeexplore.ieee.org/abstract/document/8457273/	|
|	Bert-dst: Scalable end-to-end dialogue state tracking with bidirectional encoder representations from transformer	|	https://arxiv.org/abs/1907.03040	|
|	Find and focus: Retrieve and localize video events with natural language queries	|	http://openaccess.thecvf.com/content_ECCV_2018/html/Dian_SHAO_Find_and_Focus_ECCV_2018_paper.html	|
|	Story cloze evaluator: Vector space representation evaluation by predicting what happens next	|	https://www.aclweb.org/anthology/W16-2505.pdf	|
|	Harnessing ai for augmenting creativity: Application to movie trailer creation	|	https://dl.acm.org/doi/abs/10.1145/3123266.3127906	|
|	Don't Settle for Average, Go for the Max: Fuzzy Sets and Max-Pooled Word Vectors	|	https://arxiv.org/abs/1904.13264	|
|	SummCoder: An unsupervised framework for extractive text summarization based on deep auto-encoders	|	https://www.sciencedirect.com/science/article/pii/S0957417419302192	|
|	Aesthetic critiques generation for photos	|	http://openaccess.thecvf.com/content_iccv_2017/html/Chang_Aesthetic_Critiques_Generation_ICCV_2017_paper.html	|
|	Sample efficient text summarization using a single pre-trained transformer	|	https://arxiv.org/abs/1905.08836	|
|	Improving relation extraction by pre-trained language representations	|	https://arxiv.org/abs/1906.03088	|
|	DT_Team at SemEval-2017 Task 1: Semantic Similarity Using Alignments, Sentence-Level Embeddings and Gaussian Mixture Model Output	|	https://www.aclweb.org/anthology/S17-2014.pdf	|
|	Real or fake? learning to discriminate machine from human generated text	|	https://arxiv.org/abs/1906.03351	|
|	Beyond canonical texts: A computational analysis of fanfiction	|	https://www.aclweb.org/anthology/D16-1218.pdf	|
|	Towards text generation with adversarially learned neural outlines	|	http://papers.nips.cc/paper/7983-towards-text-generation-with-adversarially-learned-neural-outlines	|
|	Rethinking skip-thought: A neighborhood based approach	|	https://arxiv.org/abs/1706.03146	|
|	Extreme language model compression with optimal subwords and shared projections	|	https://arxiv.org/abs/1909.11687	|
|	A survey on deep learning methods for robot vision	|	https://arxiv.org/abs/1803.10862	|
|	Domain-specific language model pretraining for biomedical natural language processing	|	https://arxiv.org/abs/2007.15779	|
|	Full-GRU natural language video description for service robotics applications	|	https://ieeexplore.ieee.org/abstract/document/8258893/	|
|	Context mover's distance & barycenters: Optimal transport of contexts for building representations	|	http://proceedings.mlr.press/v108/singh20a.html	|
|	Multimodal filtering of social media for temporal monitoring and event analysis	|	https://dl.acm.org/doi/abs/10.1145/3206025.3206079	|
|	Fine-tuning pre-trained transformer language models to distantly supervised relation extraction	|	https://arxiv.org/abs/1906.08646	|
|	Inferlite: Simple universal sentence representations from natural language inference data	|	https://www.aclweb.org/anthology/D18-1524.pdf	|
|	Deepdiary: Automatically captioning lifelogging image streams	|	https://link.springer.com/chapter/10.1007/978-3-319-46604-0_33	|
|	Generating bags of words from the sums of their word embeddings	|	https://link.springer.com/chapter/10.1007/978-3-319-75477-2_5	|
|	Video scene analysis: an overview and challenges on deep learning algorithms	|	https://link.springer.com/article/10.1007/s11042-017-5438-7	|
|	Team papelo: Transformer networks at fever	|	https://arxiv.org/abs/1901.02534	|
|	Whodunnit? crime drama as a case for natural language understanding	|	https://www.mitpressjournals.org/doi/abs/10.1162/tacl_a_00001	|
|	DisSent: Learning sentence representations from explicit discourse relations	|	https://www.aclweb.org/anthology/P19-1442.pdf	|
|	What's in a question: Using visual questions as a form of supervision	|	http://openaccess.thecvf.com/content_cvpr_2017/html/Ganju_Whats_in_a_CVPR_2017_paper.html	|
|	Plato: Pre-trained dialogue generation model with discrete latent variable	|	https://arxiv.org/abs/1910.07931	|
|	Learning to align the source code to the compiled object code	|	http://proceedings.mlr.press/v70/levy17a.html	|
|	Understanding and improving transformer from a multi-particle dynamic system point of view	|	https://arxiv.org/abs/1906.02762	|
|	Dirichlet variational autoencoder for text modeling	|	https://arxiv.org/abs/1811.00135	|
|	Speech-based visual question answering	|	https://arxiv.org/abs/1705.00464	|
|	Longformer: The long-document transformer	|	https://arxiv.org/abs/2004.05150	|
|	AlBERTo: Italian BERT Language Understanding Model for NLP Challenging Tasks Based on Tweets.	|	http://ceur-ws.org/Vol-2481/paper57.pdf	|
|	Practical text classification with large pre-trained language models	|	https://arxiv.org/abs/1812.01207	|
|	Assessing social and intersectional biases in contextualized word representations	|	http://papers.nips.cc/paper/9479-assessing-social-and-intersectional-biases-in-contextualized-word-representations	|
|	Integrating character networks for extracting narratives from multimodal data	|	https://www.sciencedirect.com/science/article/pii/S0306457318304618	|
|	Do Attention Heads in BERT Track Syntactic Dependencies?	|	https://arxiv.org/abs/1911.12246	|
|	Pun generation with surprise	|	https://arxiv.org/abs/1904.06828	|
|	An end-to-end approach to natural language object retrieval via context-aware deep reinforcement learning	|	https://arxiv.org/abs/1703.07579	|
|	Diachronic sense modeling with deep contextualized word embeddings: An ecological view	|	https://www.aclweb.org/anthology/P19-1379.pdf	|
|	Learning universal sentence representations with mean-max attention autoencoder	|	https://arxiv.org/abs/1809.06590	|
|	Unsupervised domain adaptation of contextualized embeddings for sequence labeling	|	https://arxiv.org/abs/1904.02817	|
|	HiText: Text reading with dynamic salience marking	|	https://dl.acm.org/doi/abs/10.1145/3041021.3054168	|
|	Trends in integration of vision and language research: A survey of tasks, datasets, and methods	|	https://arxiv.org/abs/1907.09358	|
|	Movienet: A holistic dataset for movie understanding	|	https://arxiv.org/abs/2007.10937	|
|	Incorporating structured commonsense knowledge in story completion	|	https://www.aaai.org/ojs/index.php/AAAI/article/view/5183	|
|	Generalization through memorization: Nearest neighbor language models	|	https://arxiv.org/abs/1911.00172	|
|	Hopfield networks is all you need	|	https://arxiv.org/abs/2008.02217	|
|	Multi-Granularity Self-Attention for Neural Machine Translation	|	https://arxiv.org/abs/1909.02222	|
|	A face-to-face neural conversation model	|	http://openaccess.thecvf.com/content_cvpr_2018/html/Chu_A_Face-to-Face_Neural_CVPR_2018_paper.html	|
|	[C] Rare Words: A Major Problem for Contextualized Embeddings and How to Fix it by Attentive Mimicking.	|		|
|	Cause-Effect Knowledge Acquisition and Neural Association Model for Solving A Set of Winograd Schema Problems.	|	https://www.ijcai.org/Proceedings/2017/0326.pdf	|
|	Scaling laws for neural language models	|	https://arxiv.org/abs/2001.08361	|
|	Punny captions: Witty wordplay in image descriptions	|	https://arxiv.org/abs/1704.08224	|
|	K-adapter: Infusing knowledge into pre-trained models with adapters	|	https://arxiv.org/abs/2002.01808	|
|	Parallel iterative edit models for local sequence transduction	|	https://arxiv.org/abs/1910.02893	|
|	Adversarial text generation without reinforcement learning	|	https://arxiv.org/abs/1810.06640	|
|	Deep multimodal embedding model for fine-grained sketch-based image retrieval	|	https://dl.acm.org/doi/abs/10.1145/3077136.3080681	|
|	Sentence directed video object codiscovery	|	https://link.springer.com/article/10.1007/s11263-017-1018-6	|
|	[C] The octopus approach to the Alexa competition: A deep ensemble-based socialbot	|		|
|	Trimming and improving skip-thought vectors	|	https://arxiv.org/abs/1706.03148	|
|	A neural multi-sequence alignment technique (neumatch)	|	http://openaccess.thecvf.com/content_cvpr_2018/html/Dogan_A_Neural_Multi-Sequence_CVPR_2018_paper.html	|
|	Unilmv2: Pseudo-masked language models for unified language model pre-training	|	https://arxiv.org/abs/2002.12804	|
|	Don't Stop Pretraining: Adapt Language Models to Domains and Tasks	|	https://arxiv.org/abs/2004.10964	|
|	Embeddia at SemEval-2019 Task 6: Detecting hate with neural network and transfer learning approaches	|	https://www.aclweb.org/anthology/S19-2108.pdf	|
|	Denoising based sequence-to-sequence pre-training for text generation	|	https://arxiv.org/abs/1908.08206	|
|	Memory Efficient Adaptive Optimization	|	http://papers.nips.cc/paper/9168-memory-efficient-adaptive-optimization	|
|	Temporal event knowledge acquisition via identifying narratives	|	https://arxiv.org/abs/1805.10956	|
|	[C] Assessing the Benchmarking Capacity of Machine Reading Comprehension Datasets.	|		|
|	Journal of visual communication and image representation	|	https://earbmc.sitehost.iu.edu/pubs/Crandall_deepdiary.pdf	|
|	Efficient training of bert by progressively stacking	|	http://proceedings.mlr.press/v97/gong19a.html	|
|	Bond: Bert-assisted open-domain named entity recognition with distant supervision	|	https://dl.acm.org/doi/abs/10.1145/3394486.3403149	|
|	[C] Evaluating Commonsense in Pre-Trained Language Models.	|		|
|	A coupled hidden conditional random field model for simultaneous face clustering and naming in videos	|	https://ieeexplore.ieee.org/abstract/document/7547293/	|
|	Mixed membership word embeddings for computational social science	|	http://proceedings.mlr.press/v84/foulds18a.html	|
|	Comparing character-level neural language models using a lexical decision task	|	https://www.aclweb.org/anthology/E17-2020.pdf	|
|	AraBERT: Transformer-based model for Arabic language understanding	|	https://arxiv.org/abs/2003.00104	|
|	Deep sequential and structural neural models of compositionality	|	https://ecommons.cornell.edu/handle/1813/47892	|
|	Adversarial training and decoding strategies for end-to-end neural conversation models	|	https://www.sciencedirect.com/science/article/pii/S0885230818300949	|
|	Sticking to the facts: Confident decoding for faithful data-to-text generation	|	https://arxiv.org/abs/1910.08684	|
|	On layer normalization in the transformer architecture	|	https://arxiv.org/abs/2002.04745	|
|	[C] CAiRE: An End-to-End Empathetic Chatbot.	|		|
|	Minilm: Deep self-attention distillation for task-agnostic compression of pre-trained transformers	|	https://arxiv.org/abs/2002.10957	|
|	Exploring asymmetric encoder-decoder structure for context-based sentence representation learning	|	https://openreview.net/forum?id=Bk7wvW-C-&noteId=Bk7wvW-C-	|
|	Modelling sentence generation from sum of word embedding vectors as a mixed integer programming problem	|	https://ieeexplore.ieee.org/abstract/document/7836744/	|
|	[C] Do Not Have Enough Data? Deep Learning to the Rescue!	|		|
|	A transformer-based approach to irony and sarcasm detection	|	https://link.springer.com/article/10.1007/s00521-020-05102-3	|
|	Regularized and retrofitted models for learning sentence representation with context	|	https://dl.acm.org/doi/abs/10.1145/3132847.3133011	|
|	M-vad names: a dataset for video captioning with naming	|	https://link.springer.com/article/10.1007/s11042-018-7040-z	|
|	Moviescope: Large-scale analysis of movies using multiple modalities	|	https://arxiv.org/abs/1908.03180	|
|	Nilc at cwi 2018: Exploring feature engineering and feature learning	|	https://www.aclweb.org/anthology/W18-0540.pdf	|
|	Generating sentences using a dynamic canvas	|	https://arxiv.org/abs/1806.05178	|
|	[C] A cost-sensitive visual question-answer framework for mining a deep and-or object semantics from web images	|		|
|	Structbert: Incorporating language structures into pre-training for deep language understanding	|	https://arxiv.org/abs/1908.04577	|
|	Now you shake me: Towards automatic 4D cinema	|	http://openaccess.thecvf.com/content_cvpr_2018/html/Zhou_Now_You_Shake_CVPR_2018_paper.html	|
|	BUT-FIT at SemEval-2019 Task 7: Determining the Rumour Stance with Pre-Trained Deep Bidirectional Transformers	|	https://arxiv.org/abs/1902.10126	|
|	TalkSumm: A Dataset and Scalable Annotation Method for Scientific Paper Summarization Based on Conference Talks	|	https://arxiv.org/abs/1906.01351	|
|	StereoSet: Measuring stereotypical bias in pretrained language models	|	https://arxiv.org/abs/2004.09456	|
|	Well-read students learn better: On the importance of pre-training compact models	|	https://arxiv.org/abs/1908.08962	|
|	Analysis of adapted films and stories based on social network	|	https://ieeexplore.ieee.org/abstract/document/8798733/	|
|	Imagebert: Cross-modal pre-training with large-scale weak-supervised image-text data	|	https://arxiv.org/abs/2001.07966	|
|	Deep state space models for unconditional word generation	|	http://papers.nips.cc/paper/7854-deep-state-space-models-for-unconditional-word-generation	|
|	Metric for automatic machine translation evaluation based on universal sentence representations	|	https://arxiv.org/abs/1805.07469	|
|	Large-scale pretraining for visual dialog: A simple state-of-the-art baseline	|	https://arxiv.org/abs/1912.02379	|
|	Content vs. function words: The view from distributional semantics	|	https://ojs.ub.uni-konstanz.de/sub/index.php/sub/article/view/2	|
|	EigenSent: Spectral sentence embeddings using higher-order Dynamic Mode Decomposition	|	https://www.aclweb.org/anthology/P19-1445.pdf	|
|	Attending to entities for better text understanding	|	https://ojs.aaai.org/index.php/AAAI/article/view/6254	|
|	Label-based automatic alignment of video with narrative sentences	|	https://link.springer.com/chapter/10.1007/978-3-319-46604-0_43	|
|	Inducing brain-relevant bias in natural language processing models	|	http://papers.nips.cc/paper/9559-inducing-brain-relevant-bias-in-natural-language-processing-models	|
|	Compressing large-scale transformer-based models: A case study on bert	|	https://arxiv.org/abs/2002.11985	|
|	ClassiNet--Predicting Missing Features for Short-Text Classification	|	https://dl.acm.org/doi/abs/10.1145/3201578	|
|	Social bias frames: Reasoning about social and power implications of language	|	https://arxiv.org/abs/1911.03891	|
|	Time of your hate: The challenge of time in hate speech detection on social media	|	https://www.mdpi.com/2076-3417/10/12/4180	|
|	Recycling a pre-trained BERT encoder for neural machine translation	|	https://www.aclweb.org/anthology/D19-5603/	|
|	Span selection pre-training for question answering	|	https://arxiv.org/abs/1909.04120	|
|	Realtoxicityprompts: Evaluating neural toxic degeneration in language models	|	https://arxiv.org/abs/2009.11462	|
|	Unsupervised stylish image description generation via domain layer norm	|	https://www.aaai.org/ojs/index.php/AAAI/article/view/4824	|
|	Lexical semantic change analysis with contextualised word representations	|	http://gmario.eu/mscthesis.pdf	|
|	How decoding strategies affect the verifiability of generated text	|	https://arxiv.org/abs/1911.03587	|
|	CLUECorpus2020: A Large-scale Chinese Corpus for Pre-trainingLanguage Model	|	https://arxiv.org/abs/2003.01355	|
|	Embedding strategies for specialized domains: Application to clinical entity recognition	|	https://www.aclweb.org/anthology/P19-2041.pdf	|
|	Machine translation evaluation with BERT regressor	|	https://arxiv.org/abs/1907.12679	|
|	Unsupervised question decomposition for question answering	|	https://arxiv.org/abs/2002.09758	|
|	Deep bidirectional transformers for relation extraction without supervision	|	https://arxiv.org/abs/1911.00313	|
|	Weakly supervised learning of heterogeneous concepts in videos	|	https://link.springer.com/chapter/10.1007/978-3-319-46466-4_17	|
|	Rethinking attention with performers	|	https://arxiv.org/abs/2009.14794	|
|	Recent advances in natural language inference: A survey of benchmarks, resources, and approaches	|	https://arxiv.org/abs/1904.01172	|
|	Have a chat with BERT; passage re-ranking using conversational context	|	https://www.ru.nl/publish/pages/769526/tanja_crijns_msc_thesis_ds_22_8_2019.pdf	|
|	Levels of hate in online environments	|	https://dl.acm.org/doi/abs/10.1145/3341161.3343521	|
|	Prophetnet: Predicting future n-gram for sequence-to-sequence pre-training	|	https://arxiv.org/abs/2001.04063	|
|	CLER: Cross-task learning with expert representation to generalize reading and understanding	|	https://www.aclweb.org/anthology/D19-5824/	|
|	An Interactive tour guide for a heritage site	|	http://openaccess.thecvf.com/content_ICCV_2017_workshops/w42/html/Chelaramani_An_Interactive_Tour_ICCV_2017_paper.html	|
|	Improving sentence representations with multi-view frameworks	|	https://openreview.net/forum?id=S1xzyhR9Y7	|
|	Aligning movies with scripts by exploiting temporal ordering constraints	|	https://ieeexplore.ieee.org/abstract/document/7899895/	|
|	Learning semantic sentence representations from visually grounded language without lexical knowledge	|	https://www.cambridge.org/core/journals/natural-language-engineering/article/learning-semantic-sentence-representations-from-visually-grounded-language-without-lexical-knowledge/FA9DD2C9FFC973AC4B4FC2F520E661B8	|
|	Emptransfo: A multi-head transformer architecture for creating empathetic dialog systems	|	https://arxiv.org/abs/2003.02958	|
|	Does it make sense? and why? a pilot study for sense making and explanation	|	https://arxiv.org/abs/1906.00363	|
|	Residual energy-based models for text generation	|	https://arxiv.org/abs/2004.11714	|
|	BLCU_NLP at SemEval-2019 Task 7: An Inference Chain-based GPT Model for Rumour Evaluation	|	https://www.aclweb.org/anthology/S19-2191.pdf	|
|	Telling stories with soundtracks: an empirical analysis of music in film	|	https://www.aclweb.org/anthology/W18-1504.pdf	|
|	Are Transformers universal approximators of sequence-to-sequence functions?	|	https://arxiv.org/abs/1912.10077	|
|	Finding structure in figurative language: Metaphor detection with topic-based frames	|	https://www.aclweb.org/anthology/W17-5538.pdf	|
|	On the benefit of combining neural, statistical and external features for fake news identification	|	https://arxiv.org/abs/1712.03935	|
|	LinCE: A centralized benchmark for linguistic code-switching evaluation	|	https://arxiv.org/abs/2005.04322	|
|	Automatic evaluation of end-to-end dialog systems with adequacy-fluency metrics	|	https://www.sciencedirect.com/science/article/pii/S0885230818300858	|
|	Generating text through adversarial training using skip-thought vectors	|	https://arxiv.org/abs/1808.08703	|
|	Automatic identification of character types from film dialogs	|	https://www.tandfonline.com/doi/abs/10.1080/08839514.2017.1289311	|
|	Tod-bert: Pre-trained natural language understanding for task-oriented dialogues	|	https://arxiv.org/abs/2004.06871	|
|	A comparison of pre-trained vision-and-language models for multimodal representation learning across medical images and reports	|	https://arxiv.org/abs/2009.01523	|
|	Automated Labelling using an Attention model for Radiology reports of MRI scans (ALARM)	|	https://arxiv.org/abs/2002.06588	|
|	Determining relative argument specificity and stance for complex argumentative structures	|	https://arxiv.org/abs/1906.11313	|
|	Context is Key: Grammatical Error Detection with Contextual Word Representations	|	https://arxiv.org/abs/1906.06593	|
|	A Survey on Contextual Embeddings	|	https://arxiv.org/abs/2003.07278	|
|	Pretrained Transformers for Text Ranking: BERT and Beyond	|	https://arxiv.org/abs/2010.06467	|
|	Introduction to Deep Learning Business Applications for Developers	|	https://link.springer.com/content/pdf/10.1007/978-1-4842-3453-2.pdf	|
|	Multi-view sentence representation learning	|	https://arxiv.org/abs/1805.07443	|
|	Image to Text Conversion: State of the Art and Extended Work	|	https://ieeexplore.ieee.org/abstract/document/8308390/	|
|	A survey of word embeddings for clinical text	|	https://www.sciencedirect.com/science/article/pii/S2590177X19300563	|
|	Go wide, then narrow: Efficient training of deep thin networks	|	https://arxiv.org/abs/2007.00811	|
|	Saagie at semeval-2019 task 5: From universal text embeddings and classical features to domain-specific text classification	|	https://www.aclweb.org/anthology/S19-2083.pdf	|
|	A joint learning framework with BERT for spoken language understanding	|	https://ieeexplore.ieee.org/abstract/document/8907842/	|
|	Linking artificial and human neural representations of language	|	https://arxiv.org/abs/1910.01244	|
|	Computer-generated music for tabletop role-playing games	|	https://ojs.aaai.org/index.php/AIIDE/article/view/7408	|
|	From trailers to storylines: An efficient way to learn from movies	|	https://arxiv.org/abs/1806.05341	|
|	[C] Syntactic properties of skip-thought vectors	|		|
|	Supervised and unsupervised neural approaches to text readability	|	https://arxiv.org/abs/1907.11779	|
|	[C] Text to 3D Scene Generation	|		|
|	Reweighted proximal pruning for large-scale language representation	|	https://arxiv.org/abs/1909.12486	|
|	SqueezeBERT: What can computer vision teach NLP about efficient neural networks?	|	https://arxiv.org/abs/2006.11316	|
|	Sentiment analysis is not solved! Assessing and probing sentiment classification	|	https://arxiv.org/abs/1906.05887	|
|	In SUPPLEMENTARY INFORMATION, on	|	http://www.cboe.org/publish/LegApprove/SR-CBOE-2008-70.pdf	|
|	Unsupervised Evaluation Metrics and Learning Criteria for Non-Parallel Textual Transfer	|	https://arxiv.org/abs/1810.11878	|

## Europarl

OriginalURL: https://arxiv.org/abs/1506.06724

```bibtex
@inproceedings{koehn2005europarl,
  title={Europarl: A parallel corpus for statistical machine translation},
  author={Koehn, Philipp},
  booktitle={MT summit},
  volume={5},
  pages={79--86},
  year={2005},
  organization={Citeseer}
}
```

### EuPa-1

Normalized (pointwise) mutual information in collocation extraction
Original URL: https://svn.spraakdata.gu.se/repos/gerlof/pub/www/Docs/npmi-pfd.pdf

```bibtex
@article{bouma2009normalized,
  title={Normalized (pointwise) mutual information in collocation extraction},
  author={Bouma, Gerlof},
  journal={Proceedings of GSCL},
  pages={31--40},
  year={2009}
}
```

Bouma's paper deals with the difficulties in using mutual information measures and pointwise mutual information measures by creating normalised variants with increased interpratablity and reduced occurence frequency. The paper also includes an empirical study into the impact of these new normalised variants.

### EuPa-2

Statistical machine translation
Original URL: https://books.google.com.au/books?hl=en&lr=&id=kKYgAwAAQBAJ&oi=fnd&pg=PR11&ots=k7wmUUg52r&sig=ETwNcUAnvFGNie23tfau10kgCY8&redir_esc=y#v=onepage&q&f=false

```bibtex
@book{koehn2009statistical,
  title={Statistical machine translation},
  author={Koehn, Philipp},
  year={2009},
  publisher={Cambridge University Press}
}
```

This book on Machine Translation is a comprehensive look at using various machine-enabled language translation, with the EuroParl corpus involved in both the empirical and machine-analytical elements of the book. 

### EuPa-3

KenLM: Faster and smaller language mode queries
Original URL: https://www.aclweb.org/anthology/W11-2123.pdf

```bibtex
@inproceedings{heafield2011kenlm,
  title={KenLM: Faster and smaller language model queries},
  author={Heafield, Kenneth},
  booktitle={Proceedings of the sixth workshop on statistical machine translation},
  pages={187--197},
  year={2011}
}
```

The KenLM library implements both a PROBING and Trie data structure for increased performance in language translation. PROBING used linear probing hash tables and was considerably more performant than the competing SRILM model. Their new Trie structure was also more performant over a number of key indicators. This library can be found in the Moses, cdec, and Joshua translation systems.

### EuPa-4

BabelNet: The automatic construction, evaluation and application of a wide-coverage multilingual semantic network
Original URL: https://www.sciencedirect.com/science/article/pii/S0004370212000793

```bibtex
@article{NAVIGLI2012217,
	title = "BabelNet: The automatic construction, evaluation and application of a wide-coverage multilingual semantic network",
	journal = "Artificial Intelligence",
	volume = "193",
	pages = "217 - 250",
	year = "2012",
	issn = "0004-3702",
	doi = "https://doi.org/10.1016/j.artint.2012.07.001",
	url = "http://www.sciencedirect.com/science/article/pii/S0004370212000793",
	author = "Roberto Navigli and Simone Paolo Ponzetto",
	keywords = "Knowledge acquisition, Word sense disambiguation, Graph algorithms, Semantic networks",
}
```

Navigli and Ponzetto present an automatic approach to constructing BabelNet, the large-scale wide-coverage multilingual semantic network. The paper highlights the use of machine translation, WordNet, Wikipedia, and their own in-vitro experiments on gold-standard datasets like the EuroParl corpus in creating what they claim is state-of-the-art results on three SemEval evaluation tasks.

### EuPa-5

Learning Phrase Representations using RNN Encoder-Decoder for Statistical Machine Translation
Original URL: https://arxiv.org/abs/1406.1078

```bibtex
@misc{cho2014learning,
      title={Learning Phrase Representations using RNN Encoder-Decoder for Statistical Machine Translation}, 
      author={Kyunghyun Cho and Bart van Merrienboer and Caglar Gulcehre and Dzmitry Bahdanau and Fethi Bougares and Holger Schwenk and Yoshua Bengio},
      year={2014},
      eprint={1406.1078},
      archivePrefix={arXiv},
      primaryClass={cs.CL}
}
```

Through the use of two concurrent RNNs, Cho et al (2014) show an empirically more effective encoder-decoder in its capacity to reach a target sequence for a given source sequence in phrase translations. The paper also claims their model learns a semantically and syntactically meaningful representation of linguistic phrases during an operation. 

### Full list of found citations

|	Title	|	URL	|
|	------------------------------------	|	------------------------------------	|
|	Learning phrase representations using RNN encoder-decoder for statistical machine translation	|	https://arxiv.org/abs/1406.1078	|
|	Routledge encyclopedia of translation studies	|	https://books.google.com/books?hl=en&lr=&id=f3FeBwAAQBAJ&oi=fnd&pg=PR1&ots=Eytc61VQqy&sig=W70tV_jBuUkQTe_-P-SdJzMj02U	|
|	Statistical machine translation	|	https://books.google.com/books?hl=en&lr=&id=kKYgAwAAQBAJ&oi=fnd&pg=PR11&ots=k7wmUUg52r&sig=ETwNcUAnvFGNie23tfau10kgCY8	|
|	BabelNet: The automatic construction, evaluation and application of a wide-coverage multilingual semantic network	|	https://www.sciencedirect.com/science/article/pii/S0004370212000793	|
|	KenLM: Faster and smaller language model queries	|	https://www.aclweb.org/anthology/W11-2123.pdf	|
|	Normalized (pointwise) mutual information in collocation extraction	|	https://svn.spraakdata.gu.se/repos/gerlof/pub/www/Docs/npmi-pfd.pdf	|
|	Findings of the 2014 workshop on statistical machine translation	|	https://www.aclweb.org/anthology/W14-3302.pdf	|
|	The Sketch Engine: ten years on	|	https://link.springer.com/content/pdf/10.1007/s40607-014-0009-9.pdf	|
|	The JRC-Acquis: A multilingual aligned parallel corpus with 20+ languages	|	https://arxiv.org/abs/cs/0609058	|
|	PPDB: The paraphrase database	|	https://www.aclweb.org/anthology/N13-1092.pdf	|
|	Learning word vectors for 157 languages	|	https://arxiv.org/abs/1802.06893	|
|	BabelNet: Building a very large multilingual semantic network	|	https://www.aclweb.org/anthology/P10-1023.pdf	|
|	Wit3: Web inventory of transcribed and translated talks	|	https://cris.fbk.eu/handle/11582/104409	|
|	langid. py: An off-the-shelf language identification tool	|	https://www.aclweb.org/anthology/P12-3005.pdf	|
|	Intelligent selection of language model training data	|	https://www.microsoft.com/en-us/research/publication/intelligent-selection-of-language-model-training-data/	|
|	Neural network methods for natural language processing	|	https://www.morganclaypool.com/doi/abs/10.2200/S00762ED1V01Y201703HLT037	|
|	Scalable modified Kneser-Ney language model estimation	|	https://www.aclweb.org/anthology/P13-2121.pdf	|
|	Statistical machine translation	|	https://dl.acm.org/doi/abs/10.1145/1380584.1380586	|
|	Posterior regularization for structured latent variable models	|	http://www.jmlr.org/papers/volume11/ganchev10a/ganchev10a.pdf	|
|	Word lengths are optimized for efficient communication	|	https://www.pnas.org/content/108/9/3526.short	|
|	Learning bilingual lexicons from monolingual corpora	|	https://www.aclweb.org/anthology/P08-1088.pdf	|
|	Midge: Generating image descriptions from computer vision detections	|	https://www.aclweb.org/anthology/E12-1076.pdf	|
|	Improved statistical machine translation using paraphrases	|	https://www.aclweb.org/anthology/N06-1003.pdf	|
|	Meteor 1.3: Automatic metric for reliable optimization and evaluation of machine translation systems	|	https://www.aclweb.org/anthology/W11-2107.pdf	|
|	Bilbowa: Fast bilingual distributed representations without word alignments	|	http://www.jmlr.org/proceedings/papers/v37/gouws15.pdf	|
|	Unsupervised part-of-speech tagging with bilingual graph-based projections	|	https://www.aclweb.org/anthology/P11-1061.pdf	|
|	Offline bilingual word vectors, orthogonal transformations and the inverted softmax	|	https://arxiv.org/abs/1702.03859	|
|	An autoencoder approach to learning bilingual word representations	|	http://papers.nips.cc/paper/5270-an-autoencoder-approach-to-learning-bilingual-word-representations	|
|	Multilingual models for compositional distributed semantics	|	https://arxiv.org/abs/1404.4641	|
|	Apertium: a free/open-source platform for rule-based machine translation	|	https://link.springer.com/content/pdf/10.1007/s10590-011-9090-0.pdf	|

## Enron Emails

OriginalURL: https://arxiv.org/abs/1506.06724

```bibtex
@inproceedings{klimt2004enron,
  title={The enron corpus: A new dataset for email classification research},
  author={Klimt, Bryan and Yang, Yiming},
  booktitle={European Conference on Machine Learning},
  pages={217--226},
  year={2004},
  organization={Springer}
}
```

### Enrn-1

Communication networks from the Enron email corpus “It's always about the people. Enron is no different”
Original URL: https://link.springer.com/article/10.1007/s10588-005-5377-0#citeas

```bibtex
@article{diesner2005communication,
  title={Communication networks from the Enron email corpus “It's always about the people. Enron is no different”},
  author={Diesner, Jana and Frantz, Terrill L and Carley, Kathleen M},
  journal={Computational \& Mathematical Organization Theory},
  volume={11},
  number={3},
  pages={201--228},
  year={2005},
  publisher={Springer}
}
```

This paper by Diesner et al (2005) explores the Enron Email Corpus to understand and model the interactions of organisation members during a survival-endangering crisis. The paper studies the topography and characteristics of the social network as well as the properties and patterns of the communicative style employed. The end result is a deeper understanding of organisational failure.

### Enrn-2

The structure of information pathways in a social communication network
Original URL: https://dl.acm.org/doi/abs/10.1145/1401890.1401945

```bibtex
@inproceedings{10.1145/1401890.1401945,
author = {Kossinets, Gueorgi and Kleinberg, Jon and Watts, Duncan},
title = {The Structure of Information Pathways in a Social Communication Network},
year = {2008},
isbn = {9781605581934},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/1401890.1401945},
doi = {10.1145/1401890.1401945},
booktitle = {Proceedings of the 14th ACM SIGKDD International Conference on Knowledge Discovery and Data Mining},
pages = {435–443},
numpages = {9},
keywords = {communication latency, strength of weak ties, social network},
location = {Las Vegas, Nevada, USA},
series = {KDD '08}
}
```

The Enron corpus formed part of Kossinets et al's (2008) study of the speed of information transfer between agents in a social network. They draw on the notion of vector-clocks from distributed computing to frame a temporal notion of 'distance' between nodes in a social network. Their studies developed new understanding in the connectivity of social networks showing they have a sparse backbone with highly-embedded edges and long-range bridges. 

### Enrn-3

Community evolution in dynamic multi-mode networks
Original URL: https://dl.acm.org/doi/abs/10.1145/1401890.1401972

```bibtex
@inproceedings{10.1145/1401890.1401972,
author = {Tang, Lei and Liu, Huan and Zhang, Jianping and Nazeri, Zohreh},
title = {Community Evolution in Dynamic Multi-Mode Networks},
year = {2008},
isbn = {9781605581934},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/1401890.1401972},
doi = {10.1145/1401890.1401972},
booktitle = {Proceedings of the 14th ACM SIGKDD International Conference on Knowledge Discovery and Data Mining},
pages = {677–685},
numpages = {9},
keywords = {dynamic heterogeneous network, community evolution, multi-mode networks, evolution, dynamic network analysis},
location = {Las Vegas, Nevada, USA},
series = {KDD '08}
}
```

The Enron Emails formed part of the real-world social networks studied by Tang et al (2008) in attempting to create an accurate model of social influencers, data shortages, and marketing needs within groups. They took these specific examples and formed a framework to which, they argued, they could apply to social groups more generally.

### Enrn-4

Adaptive Regularization of Weight Vectors
Original URL: https://proceedings.neurips.cc/paper/2009/hash/8ebda540cbcc4d7336496819a46a1b68-Abstract.html

```bibtex
@inproceedings{NIPS2009_8ebda540,
 author = {Crammer, Koby and Kulesza, Alex and Dredze, Mark},
 booktitle = {Advances in Neural Information Processing Systems},
 editor = {Y. Bengio and D. Schuurmans and J. Lafferty and C. Williams and A. Culotta},
 pages = {414--422},
 publisher = {Curran Associates, Inc.},
 title = {Adaptive Regularization of Weight Vectors},
 url = {https://proceedings.neurips.cc/paper/2009/file/8ebda540cbcc4d7336496819a46a1b68-Paper.pdf},
 volume = {22},
 year = {2009}
}
```

This paper introduces the Adaptive Regularization of Weight Vectors (AROW) model, an online learning algorithm with large margin training, confidence weighting, and tolerance for non-seperable data.  The paper has been cited 310 times since its publish-date in 2009.

### Enrn-5

An extensive experimental comparison of methods for multi-label learning
Original URL: https://www.sciencedirect.com/science/article/abs/pii/S0031320312001203

```bibtex
@article{MADJAROV20123084,
	title = "An extensive experimental comparison of methods for multi-label learning",
	journal = "Pattern Recognition",
	volume = "45",
	number = "9",
	pages = "3084 - 3104",
	year = "2012",
	note = "Best Papers of Iberian Conference on Pattern Recognition and Image Analysis (IbPRIA'2011)",
	issn = "0031-3203",
	doi = "https://doi.org/10.1016/j.patcog.2012.03.004",
	url = "http://www.sciencedirect.com/science/article/pii/S0031320312001203",
	author = "Gjorgji Madjarov and Dragi Kocev and Dejan Gjorgjevikj and Sašo Džeroski",
	keywords = "Multi-label ranking, Multi-label classification, Comparison of multi-label learning methods",
}
```

The Enron Emails corpus was one of 11 benchmark datasets used by Madjarov et al (2012) to determine which of 12 multi-label learning methods should be considered the gold standard for future models. Across 16 evaluation methods, their paper posited that Random Forests of predictive clustering trees (RF-PCT) aand hierarchy of multi-label classifiers (HOMER) were, at the time, the benchmarks against which future models should be tested.

### Full list of found citations

|	Title	|	URL	|
|	------------------------------------	|	------------------------------------	|
|	An extensive experimental comparison of methods for multi-label learning	|	https://www.sciencedirect.com/science/article/pii/S0031320312001203	|
|	The structure of information pathways in a social communication network	|	https://dl.acm.org/doi/abs/10.1145/1401890.1401945	|
|	Communication networks from the Enron email corpus “It's always about the people. Enron is no different”	|	https://link.springer.com/content/pdf/10.1007/s10588-005-5377-0.pdf	|
|	Adaptive regularization of weight vectors	|	http://papers.nips.cc/paper/3848-adaptive-regularization-of-weight-vectors	|
|	Community evolution in dynamic multi-mode networks	|	https://dl.acm.org/doi/abs/10.1145/1401890.1401972	|
|	Automatic categorization of email into folders: Benchmark experiments on Enron and SRI corpora	|	https://scholarworks.umass.edu/cs_faculty_pubs/218/	|
|	Toward link predictability of complex networks	|	https://www.pnas.org/content/112/8/2325.short	|
|	Contextual search and name disambiguation in email using graphs	|	https://dl.acm.org/doi/abs/10.1145/1148170.1148179	|
|	Revisiting the nystrom method for improved large-scale machine learning	|	http://proceedings.mlr.press/v28/gittens13.html	|
|	Spam filtering based on the analysis of text information embedded into images	|	http://www.jmlr.org/papers/v7/fumera06a.html	|
|	Exploration of communication networks from the enron email corpus	|	http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.86.7791&rep=rep1&type=pdf	|
|	Tracking recurring contexts using ensemble classifiers: an application to email filtering	|	https://link.springer.com/article/10.1007/s10115-009-0206-2	|
|	SMS spam filtering: Methods and data	|	https://www.sciencedirect.com/science/article/pii/S0957417412002977	|
|	Tree ensembles for predicting structured outputs	|	https://www.sciencedirect.com/science/article/pii/S003132031200430X	|
|	Interacting meaningfully with machine learning systems: Three experiments	|	https://www.sciencedirect.com/science/article/pii/S1071581909000457	|
|	Spam: A shadow history of the Internet	|	https://books.google.com/books?hl=en&lr=&id=QF7EjCRg5CIC&oi=fnd&pg=PR4&ots=gawTA4woQe&sig=LnSBnMkAX6rvLkYFc-RuwGAIem8	|
|	Pattern mining in frequent dynamic subgraphs	|	https://ieeexplore.ieee.org/abstract/document/4053109/	|
|	Automated social hierarchy detection through email network analysis	|	https://dl.acm.org/doi/abs/10.1145/1348549.1348562	|
|	Temporal and information flow based event detection from social text streams	|	https://www.aaai.org/Library/AAAI/2007/aaai07-238.php	|
|	Feature selection for multi-label classification using multivariate mutual information	|	https://www.sciencedirect.com/science/article/pii/S0167865512003352	|