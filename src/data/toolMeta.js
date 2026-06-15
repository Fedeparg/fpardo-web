import {
  SiPython, SiFastapi, SiDocker, SiCelery,
  SiOpenai, SiHuggingface, SiMeta, SiPytorch,
  SiTensorflow, SiKubernetes, SiLinux, SiGooglecloud,
} from 'react-icons/si'

export const toolMeta = {
  Python:     { icon: SiPython,      url: 'https://python.org' },
  FastAPI:    { icon: SiFastapi,     url: 'https://fastapi.tiangolo.com' },
  Docker:     { icon: SiDocker,      url: 'https://docker.com' },
  Celery:     { icon: SiCelery,      url: 'https://docs.celeryq.dev' },
  Whisper:    { icon: SiOpenai,      url: 'https://openai.com/research/whisper' },
  BERT:       { icon: SiHuggingface, url: 'https://huggingface.co/docs/transformers/model_doc/bert' },
  FAISS:      { icon: SiMeta,        url: 'https://faiss.ai' },
  PyTorch:    { icon: SiPytorch,     url: 'https://pytorch.org' },
  TensorFlow: { icon: SiTensorflow,  url: 'https://tensorflow.org' },
  Kubernetes: { icon: SiKubernetes,  url: 'https://kubernetes.io' },
  Linux:      { icon: SiLinux,       url: 'https://kernel.org' },
  GCP:        { icon: SiGooglecloud, url: 'https://cloud.google.com' },
}
