export const SITE_URL = 'https://noviqsearch.online';
export const WHATSAPP_URL = 'https://wa.me/5551995501677';
export const WHATSAPP_PHONE = '(51) 99550-1677';
export const API_DOCS_URL = 'https://api.noviqsearch.online/docs';
export const API_BASE_URL = 'https://api.noviqsearch.online/api/v1';
export const API_SEARCH_URL = `${API_BASE_URL}/search`;

export const NAV_LINKS = [
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Endpoints', href: '#endpoints' },
  { label: 'Preços', href: '#precos' },
  { label: 'FAQ', href: '#faq' },
];

export const ENDPOINTS = [
  { method: 'POST', path: '/search', label: 'Busca SERP', desc: 'Pesquisa web Google' },
  { method: 'POST', path: '/images', label: 'Busca de imagens', desc: 'Resultados de imagens' },
  { method: 'POST', path: '/news', label: 'Notícias em tempo real', desc: 'Feed de notícias' },
  { method: 'POST', path: '/shopping', label: 'Resultados de shopping', desc: 'Produtos e preços' },
  { method: 'POST', path: '/videos', label: 'Busca de vídeos', desc: 'Vídeos do Google' },
  { method: 'POST', path: '/maps', label: 'Google Maps + OSM fallback', desc: 'Localização e mapas' },
];

export const ADVANCED_ENDPOINTS = [
  { method: 'POST', path: '/crawl', label: 'Crawl recursivo de sites', desc: 'Navegação profunda' },
  { method: 'POST', path: '/extract', label: 'Extração de conteúdo', desc: 'HTML para texto limpo' },
  { method: 'POST', path: '/screenshot', label: 'Captura de tela', desc: 'Screenshot de páginas' },
  { method: 'POST', path: '/ai-search', label: 'Busca ranqueada por IA', desc: 'Resultados inteligentes' },
  { method: 'POST', path: '/deep-research', label: 'Pesquisa multi-etapas', desc: 'Research avançado' },
  { method: 'POST', path: '/rag/*', label: 'Index + query RAG', desc: 'Pipeline RAG completo' },
];

export const CREDIT_COSTS = [
  { label: 'Busca web, imagens, news, shopping, videos, maps', credits: 1 },
  { label: 'Extract (extração de conteúdo)', credits: 2 },
  { label: 'Screenshot / PDF', credits: 3 },
  { label: 'Browser (automação)', credits: 4 },
  { label: 'Crawl / AI Search / RAG Index', credits: 5 },
  { label: 'Research (síntese de fontes)', credits: 10 },
  { label: 'Deep Research (multi-etapas)', credits: 25 },
];

export const AUDIENCES = [
  { icon: '💻', title: 'Desenvolvedores', desc: 'Prototipe e produção sem burocracia.' },
  { icon: '🤖', title: 'Automações & IA/RAG', desc: 'Alimente agentes com dados web frescos.' },
  { icon: '📊', title: 'Agências & Marketing', desc: 'Análise de SERP, concorrência e keywords.' },
  { icon: '🏠', title: 'Imobiliárias', desc: 'Monitore anúncios e leads públicos.' },
  { icon: '⚖️', title: 'Jurídico', desc: 'Pesquisa em fontes públicas e editais.' },
  { icon: '🛒', title: 'E-commerce', desc: 'Preços, concorrência e shopping.' },
];

export const DIFFERENTIALS = [
  { icon: '🐳', title: 'Self-hosted', desc: 'Controle total sobre seus dados e infra Docker.' },
  { icon: '📖', title: 'Swagger docs', desc: 'Documentação interativa em /docs, sempre atualizada.' },
  { icon: '🔄', title: 'Fallbacks automáticos', desc: 'DuckDuckGo e OpenStreetMap quando o Google bloqueia.' },
  { icon: '💬', title: 'Suporte humano', desc: 'WhatsApp direto. Sem bot genérico, sem fila.' },
  { icon: '⚡', title: 'Cache Redis', desc: 'Respostas rápidas para queries repetidas.' },
  { icon: '🔗', title: 'Compatível Serper.dev', desc: 'Migre trocando apenas a base URL.' },
];

export const FAQ_ITEMS = [
  {
    q: 'Como faço para contratar?',
    a: 'Chame no WhatsApp (51) 99550-1677, escolha seu pacote de créditos e receba sua API Key em minutos.',
  },
  {
    q: 'Quanto custa?',
    a: 'R$ 5 por 500 créditos (≈ R$ 0,01 por busca web simples). Sem mensalidade, sem validade.',
  },
  {
    q: 'Preciso de cartão de crédito?',
    a: 'Não. Pagamento via Pix ou transferência, direto pelo WhatsApp.',
  },
  {
    q: 'Tem trial ou créditos grátis?',
    a: 'Sim! Comece com 2.500 créditos de teste gratuitos ao contratar.',
  },
  {
    q: 'Consigo substituir o Serper.dev?',
    a: 'Sim. Endpoints compatíveis — basta trocar a base URL e manter o mesmo formato de request/response.',
  },
  {
    q: 'Quais linguagens são suportadas?',
    a: 'Qualquer linguagem com HTTP. cURL, JavaScript, Python, Go, PHP, Ruby — REST puro.',
  },
  {
    q: 'Como funcionam os fallbacks?',
    a: 'Quando o Google bloqueia, o sistema tenta DuckDuckGo e OpenStreetMap automaticamente, sem intervenção.',
  },
  {
    q: 'Vocês emitem nota fiscal?',
    a: 'Sim, emitimos NF para pessoa física e jurídica.',
  },
];

export const CODE_EXAMPLES = {
  curl: `curl -X POST "${API_SEARCH_URL}" \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: sk_sua_chave" \\
  -d '{
    "q": "editais abertos lajeado",
    "gl": "br",
    "hl": "pt",
    "num": 10
  }'`,
  javascript: `const res = await fetch("${API_SEARCH_URL}", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-API-Key": "sk_sua_chave",
  },
  body: JSON.stringify({
    q: "editais abertos lajeado",
    gl: "br",
    hl: "pt",
    num: 10,
  }),
});

const data = await res.json();
console.log(data);`,
  python: `import requests

response = requests.post(
    "${API_SEARCH_URL}",
    headers={
        "Content-Type": "application/json",
        "X-API-Key": "sk_sua_chave",
    },
    json={
        "q": "editais abertos lajeado",
        "gl": "br",
        "hl": "pt",
        "num": 10,
    },
)

print(response.json())`,
};
