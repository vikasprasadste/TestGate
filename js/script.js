/* =========== Data: nodes (same as original) =========== */
const nodes = [
  { id:'browser-testing', name:'Browser (Web/UI)', x:15, y:20, size:70, color:'#00f5ff', category:'Functional Testing', description:'Check whether web-based applications work as expected', moons:[
    {name:'Cypress', url:'https://www.cypress.io/'}, {name:'Playwright', url:'https://playwright.dev/'}, {name:'Selenium', url:'https://www.selenium.dev/'}, {name:'Robot Framework', url:'https://robotframework.org/'}, {name:'WebDriverIO', url:'https://webdriver.io/'} ]},
  { id:'mobile-testing', name:'Mobile Testing', x:35, y:25, size:70, color:'#17d1aa', category:'Functional Testing', description:'Verify functionality and usability across mobile devices and OS', moons:[
    {name:'Appium', url:'https://appium.io/'},{name:'Espresso', url:'https://developer.android.com/training/testing/espresso'},{name:'Detox', url:'https://wix.github.io/Detox/'},{name:'Calabash', url:'https://github.com/calabash/calabash-ios'},{name:'Maestro', url:'https://maestro.mobile.dev/'},{name:'XCUITest', url:'https://developer.apple.com/documentation/xctest'} ]},
  { id:'api-testing', name:'API Testing', x:25, y:35, size:75, color:'#ff6b9d', category:'Functional Testing', description:'Verify API meets expected functionality', moons:[
    {name:'Postman/Newman', url:'https://www.postman.com/'},{name:'Rest Assured', url:'https://rest-assured.io/'},{name:'Cypress', url:'https://www.cypress.io/'},{name:'Playwright', url:'https://playwright.dev/'},{name:'Ready API', url:'https://smartbear.com/product/ready-api/overview/'},{name:'WebTest Client', url:'https://docs.spring.io/spring-framework/reference/testing/webtestclient.html'},{name:'Karate', url:'https://karatelabs.github.io/karate/'},{name:'SuperTest', url:'https://github.com/ladjs/supertest'},{name:'OkHttp3', url:'https://square.github.io/okhttp/'} ]},
  { id:'performance', name:'Performance', x:55, y:20, size:70, color:'#ffa726', category:'Non-Functional Testing', description:'Verify speed, scalability and reliability under load', moons:[
    {name:'JMeter', url:'https://jmeter.apache.org/'},{name:'Gatling', url:'https://gatling.io/'},{name:'K6', url:'https://k6.io/'},{name:'Neo Load', url:'https://www.tricentis.com/products/performance-testing-neoload'},{name:'Load Runner', url:'https://www.microfocus.com/en-us/products/loadrunner-professional/overview'},{name:'Loadview', url:'https://www.loadview-testing.com/'},{name:'Locust', url:'https://locust.io/'} ]},
  { id:'security', name:'Security Testing', x:75, y:25, size:65, color:'#e74c3c', category:'Non-Functional Testing', description:'Identify vulnerabilities and security risks', moons:[
    {name:'Burp Suite', url:'https://portswigger.net/burp'},{name:'SQL Map', url:'https://sqlmap.org/'},{name:'Veracode', url:'https://www.veracode.com/'},{name:'NMap', url:'https://nmap.org/'},{name:'Pynt', url:'https://www.pynt.io/'},{name:'ZAP', url:'https://www.zaproxy.org/'} ]},
  { id:'accessibility', name:'Accessibility', x:65, y:35, size:60, color:'#9c27b0', category:'Non-Functional Testing', description:'Tools to ensure applications are accessible to all users', moons:[
    {name:'Axe', url:'https://www.deque.com/axe/'},{name:'Lighthouse', url:'https://developer.chrome.com/docs/lighthouse/'},{name:'WAVE', url:'https://wave.webaim.org/'} ]},
  { id:'cross-browser', name:'Cross-Browser', x:15, y:50, size:60, color:'#3f51b5', category:'Platform-Specific', description:'Test across different browsers and environments', moons:[
    {name:'LambdaTest', url:'https://www.lambdatest.com/'},{name:'BrowserStack', url:'https://www.browserstack.com/'},{name:'SauceLabs', url:'https://saucelabs.com/'},{name:'TestSigma', url:'https://testsigma.com/'} ]},
  { id:'cloud-testing', name:'Cloud Based Testing Platforms', x:30, y:55, size:58, color:'#2196f3', category:'Platform-Specific', description:'Cloud-based testing platforms', moons:[
    {name:'Perfecto', url:'https://www.perfecto.io/'},{name:'TestGrid', url:'https://www.testgrid.io/'},{name:'BitBar', url:'https://bitbar.com/'} ]},
  { id:'etl', name:'ETL/Data Testing', x:55, y:50, size:62, color:'#00bcd4', category:'Data & Integration', description:'Ensure data pipeline and transformation correctness', moons:[
    {name:'QuerySurge', url:'https://www.querysurge.com/'},{name:'Talend', url:'https://www.talend.com/'},{name:'DataQ', url:'https://www.gartner.com/reviews/market/data-quality-tools'},{name:'Informatica Power Center', url:'https://www.informatica.com/products/data-integration/powercenter.html'},{name:'Right Data', url:'https://www.infogix.com/'},{name:'Integrate.io', url:'https://www.integrate.io/'} ]},
  { id:'database', name:'Database', x:72, y:50, size:62, color:'#009688', category:'Data & Integration', description:'Database systems and testing tools', moons:[
    {name:'DbUnit', url:'https://www.dbunit.org/'},{name:'SQLTest', url:'https://www.red-gate.com/products/sql-development/sql-test/'},{name:'MongoDB', url:'https://www.mongodb.com/'},{name:'Apache Cassandra', url:'https://cassandra.apache.org/'},{name:'MySQL', url:'https://www.mysql.com/'},{name:'Apache CouchDB', url:'https://couchdb.apache.org/'},{name:'Neo4j', url:'https://neo4j.com/'},{name:'Redis', url:'https://redis.io/'},{name:'Oracle Database', url:'https://www.oracle.com/database/'},{name:'PostgreSQL', url:'https://www.postgresql.org/'},{name:'Microsoft SQL Server', url:'https://www.microsoft.com/en-us/sql-server'} ]},
  { id:'test-management', name:'Test Management', x:15, y:70, size:62, color:'#4caf50', category:'Test Management', description:'Organize test planning, execution and tracking', moons:[
    {name:'TestRail', url:'https://www.testrail.com/'},{name:'XRay', url:'https://www.getxray.app/'},{name:'Zephyr Enterprise', url:'https://smartbear.com/test-management/zephyr-enterprise/'},{name:'Quality Center', url:'https://www.microfocus.com/en-us/products/alm-quality-center/overview'},{name:'testmo', url:'https://www.testmo.com/'},{name:'Qase', url:'https://qase.io/'},{name:'PractiTest', url:'https://www.practitest.com/'} ]},
  { id:'bug-tracking', name:'Bug Tracking', x:32, y:75, size:58, color:'#ff9800', category:'Test Management', description:'Track and manage bugs in single platform', moons:[
    {name:'JIRA', url:'https://www.atlassian.com/software/jira'},{name:'BugZilla', url:'https://www.bugzilla.org/'},{name:'Mantis', url:'https://www.mantisbt.org/'},{name:'Rollbar', url:'https://rollbar.com/'},{name:'Bugasura', url:'https://bugasura.io/'} ]},
  { id:'cicd', name:'CI/CD', x:50, y:70, size:75, color:'#8bc34a', category:'CI/CD & DevOps', description:'Automate development, deployment, and testing', moons:[
    {name:'Jenkins', url:'https://www.jenkins.io/'},{name:'GitHub Actions', url:'https://github.com/features/actions'},{name:'GitLab', url:'https://about.gitlab.com/'},{name:'Azure DevOps', url:'https://azure.microsoft.com/en-us/products/devops'},{name:'Circle CI', url:'https://circleci.com/'},{name:'Bitrise', url:'https://bitrise.io/'},{name:'TeamCity', url:'https://www.jetbrains.com/teamcity/'},{name:'Bamboo', url:'https://www.atlassian.com/software/bamboo'},{name:'BitBucket', url:'https://bitbucket.org/'} ]},
  { id:'version-control', name:'Version Control', x:68, y:70, size:58, color:'#673ab7', category:'CI/CD & DevOps', description:'Manage changes to source code over time', moons:[
    {name:'Git', url:'https://git-scm.com/'},{name:'Azure DevOps', url:'https://azure.microsoft.com/en-us/products/devops'},{name:'SVN', url:'https://subversion.apache.org/'},{name:'AWS Code Commit', url:'https://aws.amazon.com/codecommit/'} ]},
  { id:'containerization', name:'Containers', x:58, y:82, size:55, color:'#03a9f4', category:'CI/CD & DevOps', description:'Container orchestration platforms', moons:[
    {name:'Docker', url:'https://www.docker.com/'},{name:'Kubernetes', url:'https://kubernetes.io/'},{name:'OpenShift', url:'https://www.redhat.com/en/technologies/cloud-computing/openshift'} ]},
  { id:'visual-testing', name:'Visual Testing', x:85, y:40, size:58, color:'#e91e63', category:'Automation Enhancers', description:'Detect visual regressions and UI changes', moons:[
    {name:'Applitools', url:'https://applitools.com/'},{name:'Percy', url:'https://percy.io/'} ]},
  { id:'ai-testing', name:'AI-Powered Testing', x:88, y:55, size:62, color:'#e056fd', category:'Automation Enhancers', description:'AI and ML-powered testing tools', moons:[
    {name:'Testim', url:'https://www.testim.io/'},{name:'Mabl', url:'https://www.mabl.com/'},{name:'Functionize', url:'https://www.functionize.com/'},{name:'Postman Postbot', url:'https://www.postman.com/product/postbot/'},{name:'KushoAI', url:'https://kusho.ai/'},{name:'TestCraft', url:'https://www.testcraft.io/'},{name:'testRigor', url:'https://testrigor.com/'},{name:'CodeRabbit', url:'https://coderabbit.ai/'} ]},
  { id:'codeless', name:'Codeless Tools', x:85, y:70, size:58, color:'#ff5722', category:'Automation Enhancers', description:'No-code automation solutions', moons:[
    {name:'Cypress Studio', url:'https://docs.cypress.io/guides/references/cypress-studio'},{name:'TestSigma', url:'https://testsigma.com/'},{name:'TestRigor', url:'https://testrigor.com/'},{name:'Katalon Studio', url:'https://katalon.com/'},{name:'AccelQ', url:'https://www.accelq.com/'},{name:'Playwright Codegen', url:'https://playwright.dev/docs/codegen'},{name:'TOSCA', url:'https://www.tricentis.com/products/automate-continuous-testing-tosca'},{name:'Provar', url:'https://www.provartesting.com/'},{name:'UIPath Test Suite', url:'https://www.uipath.com/product/test-suite'} ]},
  { id:'bdd', name:'BDD Frameworks', x:8, y:35, size:52, color:'#795548', category:'Methodologies', description:'Behaviour Driven Development', moons:[
    {name:'Cucumber', url:'https://cucumber.io/'},{name:'JBehave', url:'https://jbehave.org/'},{name:'Quantum', url:'https://github.com/Perfecto-Quantum/Quantum'},{name:'Serenity', url:'https://serenity-bdd.github.io/'} ]},
  { id:'ide', name:'IDEs & Editors', x:45, y:88, size:55, color:'#607d8b', category:'Development Tools', description:'Code editors and development environments', moons:[
    {name:'IntelliJ', url:'https://www.jetbrains.com/idea/'},{name:'Eclipse', url:'https://www.eclipse.org/'},{name:'VS Code', url:'https://code.visualstudio.com/'},{name:'WebStorm', url:'https://www.jetbrains.com/webstorm/'},{name:'PyCharm', url:'https://www.jetbrains.com/pycharm/'},{name:'VIM', url:'https://www.vim.org/'},{name:'Notepad++', url:'https://notepad-plus-plus.org/'},{name:'JetBrains Aqua', url:'https://www.jetbrains.com/aqua/'} ]},
  { id:'code-quality', name:'Code Quality', x:28, y:88, size:50, color:'#9e9e9e', category:'Development Tools', description:'Code inspection and quality tools', moons:[
    {name:'SonarQube', url:'https://www.sonarsource.com/products/sonarqube/'},{name:'PMD', url:'https://pmd.github.io/'},{name:'VeraCode SAST', url:'https://www.veracode.com/products/binary-static-analysis-sast'} ]},
  { id:'reporting', name:'Reporting', x:75, y:85, size:52, color:'#4db6ac', category:'Observability', description:'Generate test execution reports', moons:[
    {name:'Allure Report', url:'https://allurereport.org/'},{name:'Cucumber HTML', url:'https://cucumber.io/docs/cucumber/reporting/'},{name:'Mochawesome', url:'https://github.com/adamgruber/mochawesome'},{name:'Extent Reports', url:'https://www.extentreports.com/'},{name:'MasterThought', url:'https://github.com/damianszczepanik/cucumber-reporting'} ]},
  { id:'logging', name:'Logging', x:88, y:85, size:50, color:'#66bb6a', category:'Observability', description:'Configure and view logs from different sources', moons:[
    {name:'Datadog', url:'https://www.datadoghq.com/'},{name:'Splunk', url:'https://www.splunk.com/'},{name:'Mezmo', url:'https://www.mezmo.com/'},{name:'Graylog', url:'https://graylog.org/'},{name:'Kibana', url:'https://www.elastic.co/kibana'},{name:'Grafana', url:'https://grafana.com/docs/grafana/latest/panels-visualizations/visualizations/logs/'} ]},
  { id:'debugging', name:'HTTP Debug', x:8, y:82, size:48, color:'#ef5350', category:'Development Tools', description:'HTTP traffic debugging tools', moons:[
    {name:'Charles Proxy', url:'https://www.charlesproxy.com/'},{name:'Fiddler', url:'https://www.telerik.com/fiddler'},{name:'Proxyman', url:'https://proxyman.io/'},{name:'Http ToolKit', url:'https://httptoolkit.com/'} ]},
  { id:'cloud', name:'Cloud Platforms', x:45, y:40, size:52, color:'#42a5f5', category:'Infrastructure', description:'Cloud service providers', moons:[
    {name:'AWS', url:'https://aws.amazon.com/'},{name:'Google Cloud', url:'https://cloud.google.com/'},{name:'IBM Cloud', url:'https://www.ibm.com/cloud'},{name:'Microsoft Azure', url:'https://azure.microsoft.com/'} ]},
];

const connections = [
  {from:'browser-testing', to:'mobile-testing'},{from:'browser-testing', to:'api-testing'},{from:'mobile-testing', to:'api-testing'},{from:'browser-testing', to:'bdd'},{from:'performance', to:'security'},{from:'security', to:'accessibility'},{from:'cross-browser', to:'browser-testing'},{from:'cloud-testing', to:'mobile-testing'},{from:'cross-browser', to:'cloud-testing'},{from:'etl', to:'database'},{from:'database', to:'api-testing'},{from:'cicd', to:'version-control'},{from:'cicd', to:'containerization'},{from:'cicd', to:'browser-testing'},{from:'cicd', to:'api-testing'},{from:'cicd', to:'mobile-testing'},{from:'visual-testing', to:'browser-testing'},{from:'ai-testing', to:'codeless'},{from:'codeless', to:'browser-testing'},{from:'test-management', to:'bug-tracking'},{from:'test-management', to:'cicd'},{from:'reporting', to:'logging'},{from:'ide', to:'code-quality'},{from:'debugging', to:'api-testing'},{from:'containerization', to:'cloud'}
];

/* ---------- helper: unique categories ---------- */
function uniqueCategories(list){
  const set = new Map();
  list.forEach(n => {
    if (!set.has(n.category)) set.set(n.category, n);
  });
  return Array.from(set.keys());
}

const categories = uniqueCategories(nodes);

/* ---------- contrast helper ---------- */
function getContrastColor(bgHex){
  if(!bgHex) return '#fff';
  const hex = bgHex.replace('#','');
  const r = parseInt(hex.substring(0,2),16);
  const g = parseInt(hex.substring(2,4),16);
  const b = parseInt(hex.substring(4,6),16);
  const brightness = (r*299 + g*587 + b*114) / 1000;
  return brightness > 150 ? '#000000' : '#FFFFFF';
}

/* ---------- render left accordion ---------- */
const categoriesContainer = document.getElementById('categoriesContainer');

function createCategoryElement(catName){
  const wrapper = document.createElement('div');
  wrapper.className = 'cat-item glass';
  const title = document.createElement('div');
  title.className = 'cat-title';
  const left = document.createElement('div');
  left.style.display='flex'; left.style.gap='8px'; left.style.alignItems='center';
  const dot = document.createElement('div');
  dot.style.width='12px'; dot.style.height='12px'; dot.style.borderRadius='6px';
  // find color from first node of that category
  const first = nodes.find(n => n.category === catName);
  dot.style.background = first?.color || '#888';
  left.appendChild(dot);
  const name = document.createElement('div'); name.textContent = catName; name.style.fontWeight='700';
  left.appendChild(name);
  title.appendChild(left);

  const expandBtn = document.createElement('button');
  expandBtn.textContent = '+';
  expandBtn.style.background='transparent';
  expandBtn.style.border='none';
  expandBtn.style.color='rgba(255,255,255,0.9)';
  expandBtn.style.fontWeight='800';
  expandBtn.style.cursor='pointer';
  title.appendChild(expandBtn);

  wrapper.appendChild(title);

  const toolHolder = document.createElement('div');
  toolHolder.style.maxHeight='0';
  toolHolder.style.overflow='hidden';
  toolHolder.style.transition='max-height .28s ease, padding .28s ease';
  toolHolder.style.padding='0 6px';

  // build grid of tools (5 columns)
  const grid = document.createElement('div');
  grid.className='tools-grid';
  const catNodes = nodes.filter(n => n.category === catName);
  // flatten moons into tool items; keep unique by name
  const tools = [];
  catNodes.forEach(n => n.moons.forEach(m => {
    if(!tools.find(t => t.name === m.name)) tools.push({...m});
  }));
  tools.forEach(t => {
    const tile = document.createElement('div');
    tile.className='tool-tile';
    // color = first node color for category
    tile.style.background = first?.color || '#666';
    tile.style.color = getContrastColor(first?.color || '#666');
    tile.textContent = t.name;
    tile.title = t.name;
    tile.addEventListener('click', ()=> window.open(t.url, '_blank','noopener'));
    grid.appendChild(tile);
  });

  toolHolder.appendChild(grid);
  wrapper.appendChild(toolHolder);

  // expand/collapse logic
  let expanded = false;
  expandBtn.addEventListener('click', (e)=> {
    e.stopPropagation();
    expanded = !expanded;
    if(expanded){
      expandBtn.textContent='−';
      toolHolder.style.maxHeight = (Math.ceil(tools.length/2) * 56 + 30) + 'px';
      toolHolder.style.padding = '8px 6px';
    } else {
      expandBtn.textContent='+';
      toolHolder.style.maxHeight = '0';
      toolHolder.style.padding = '0 6px';
    }
  });

  // clicking header toggles also
  title.addEventListener('click', ()=> expandBtn.click());

  return wrapper;
}

// init categories
categories.forEach(cat => {
  const el = createCategoryElement(cat);
  categoriesContainer.appendChild(el);
});

const firstCategory = categoriesContainer.querySelector('.cat-item');
const expandBtn = firstCategory.querySelector('.cat-title button');

/* ---------- left search filter ---------- */
const leftSearch = document.getElementById('leftSearch');
leftSearch.addEventListener('input', ()=> {
  const q = leftSearch.value.trim().toLowerCase();
  Array.from(categoriesContainer.children).forEach(card => {
    const txt = card.querySelector('.cat-title div:nth-child(2)')?.textContent || card.querySelector('.cat-title')?.textContent;
    // show if category or any tool matches
    const title = txt.toLowerCase();
    // check tools
    const tools = card.querySelectorAll('.tool-tile');
    let toolMatch = false;
    tools.forEach(t => { if(t.textContent.toLowerCase().includes(q)) toolMatch = true; });
    if(title.includes(q) || toolMatch || q === '') {
      card.style.display = '';
    } else card.style.display = 'none';
  });
});

/* ---------- SVG map rendering ---------- */
const mapSvg = document.getElementById('mapSvg');

function renderMap(filterText=''){
  // clear existing
  while(mapSvg.firstChild) mapSvg.removeChild(mapSvg.firstChild);

  // defs + glow
  const defs = document.createElementNS('http://www.w3.org/2000/svg','defs');
  defs.innerHTML = '<filter id="glow"><feGaussianBlur stdDeviation="6.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>';
  mapSvg.appendChild(defs);

  // lines first
  connections.forEach((conn, idx) => {
    const f = nodes.find(n=>n.id===conn.from);
    const t = nodes.find(n=>n.id===conn.to);
    if(!f || !t) return;
    // if filterText present, only show connections with both nodes visible
    if(filterText){
      const cond = f.name.toLowerCase().includes(filterText) || f.moons.some(m=>m.name.toLowerCase().includes(filterText));
      const cond2 = t.name.toLowerCase().includes(filterText) || t.moons.some(m=>m.name.toLowerCase().includes(filterText));
      if(!(cond && cond2)) return;
    }
    const line = document.createElementNS('http://www.w3.org/2000/svg','line');
    line.setAttribute('x1', f.x + '%');
    line.setAttribute('y1', f.y + '%');
    line.setAttribute('x2', t.x + '%');
    line.setAttribute('y2', t.y + '%');
    line.setAttribute('class','line-hover');
    line.setAttribute('data-from', f.id);
    line.setAttribute('data-to', t.id);
    mapSvg.appendChild(line);
  });

  // nodes
  nodes.forEach(n => {
    if(filterText){
      const cond = n.name.toLowerCase().includes(filterText) || n.moons.some(m=>m.name.toLowerCase().includes(filterText));
      if(!cond) {
        // render with low opacity (optional), or skip; we'll skip for clarity
        return;
      }
    }
    // outer pulse
    const outer = document.createElementNS('http://www.w3.org/2000/svg','circle');
    outer.setAttribute('cx', n.x + '%');
    outer.setAttribute('cy', n.y + '%');
    outer.setAttribute('r', (n.size*0.65).toString());
    outer.setAttribute('fill', n.color);
    outer.setAttribute('opacity','0.18');
    outer.setAttribute('filter','url(#glow)');
    outer.setAttribute('class','pulse');
    mapSvg.appendChild(outer);

    // mid
    const mid = document.createElementNS('http://www.w3.org/2000/svg','circle');
    mid.setAttribute('cx', n.x + '%');
    mid.setAttribute('cy', n.y + '%');
    mid.setAttribute('r', (n.size*0.45).toString());
    mid.setAttribute('fill', n.color);
    mid.setAttribute('opacity','0.18');
    mid.setAttribute('class','node-core');
    mapSvg.appendChild(mid);

    // core
    const core = document.createElementNS('http://www.w3.org/2000/svg','circle');
    core.setAttribute('cx', n.x + '%');
    core.setAttribute('cy', n.y + '%');
    core.setAttribute('r', (n.size*0.25).toString());
    core.setAttribute('fill', n.color);
    core.setAttribute('opacity','0.95');
    core.setAttribute('stroke','rgba(255,255,255,0.06)');
    core.style.cursor='pointer';
    mapSvg.appendChild(core);

    // label
    const txt = document.createElementNS('http://www.w3.org/2000/svg','text');
    txt.setAttribute('x', n.x + '%');
    txt.setAttribute('y', (n.y + 6) + '%');
    txt.setAttribute('text-anchor','middle');
    txt.setAttribute('fill','#fff');
    txt.setAttribute('font-size','10');
    txt.setAttribute('font-weight','700');
    txt.textContent = n.name;
    mapSvg.appendChild(txt);

    // interactions: hover highlights connected lines; click opens modal
    function highlightLines(on){
      const lines = Array.from(mapSvg.querySelectorAll('line'));
      lines.forEach(l => {
        if(l.dataset.from === n.id || l.dataset.to === n.id){
          l.style.stroke = on ? 'rgba(29,233,182,0.9)' : 'rgba(255,255,255,0.06)';
          l.style.strokeOpacity = on ? '1' : '0.06';
          l.style.strokeWidth = on ? '1.8' : '1';
        }
      });
    }
    [mid, core].forEach(el => {
      el.addEventListener('mouseenter', ()=> {
        highlightLines(true);
      });
      el.addEventListener('mouseleave', ()=> {
        highlightLines(false);
        mid.style.transform='';
        core.style.transform='';
      });
    });

    core.addEventListener('click', ()=> openModal(n));
  });
}

// initial render
renderMap('');

/* ---------- Search integration (main search) ---------- */
const mainSearch = document.getElementById('mainSearch');
let searchTimeout = null;
mainSearch.addEventListener('input', ()=> {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(()=>{
    const q = mainSearch.value.trim().toLowerCase();
    renderMap(q);
    // also filter left panel categories if desired
    // we keep left panel independent but optionally hide categories not matching
    Array.from(categoriesContainer.children).forEach(card=>{
      const title = card.querySelector('.cat-title div:nth-child(2)')?.textContent || '';
      const catText = title.toLowerCase();
      if(q==='') { card.style.display=''; return; }
      // check tools
      const tools = card.querySelectorAll('.tool-tile');
      let match=false;
      tools.forEach(t=> { if(t.textContent.toLowerCase().includes(q)) match=true; });
      if(catText.includes(q) || match) card.style.display=''; else card.style.display='none';
    });
  }, 140);
});

/* ---------- Modal for node details ---------- */
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');
modalClose.addEventListener('click', ()=> { modal.style.display='none'; });

function openModal(node){
  modalTitle.textContent = node.name;
  modalCategory.textContent = node.category;
  // tools grid: 2 columns inside modal
  modalBody.innerHTML = '';
  const grid = document.createElement('div');
  grid.style.display='grid';
  grid.style.gridTemplateColumns='repeat(2, 1fr)';
  grid.style.gap='8px';
  node.moons.forEach(m=>{
    const b = document.createElement('button');
    b.textContent = m.name;
    b.style.padding='10px';
    b.style.borderRadius='10px';
    b.style.background='rgba(255,255,255,0.04)';
    b.style.border='1px solid rgba(255,255,255,0.04)';
    b.style.color='#fff';
    b.style.cursor='pointer';
    b.addEventListener('click', ()=> window.open(m.url, '_blank','noopener'));
    grid.appendChild(b);
  });
  modalBody.appendChild(grid);
  modal.style.display='flex';
}

/* close modal on backdrop click */
modal.addEventListener('click', (e)=> { if(e.target === modal) modal.style.display='none'; });

// keyboard escape to close
window.addEventListener('keydown', (e)=> { if(e.key === 'Escape') modal.style.display='none'; });

/* ---------- make left panel scroll independently and persist scroll pos on resize ---------- */
const leftScroll = document.getElementById('leftScroll');
// nothing special needed beyond CSS overflow; but ensure scrollbar visible nicely for user agent
leftScroll.style.webkitOverflowScrolling = 'touch';

// optional: expand first category by default
window.addEventListener('load', () => {
    // Get the very first category div
    const firstCategory = categoriesContainer.querySelector('.cat-item');

    if (firstCategory) {
        // Find the expand/collapse button (the last element in the cat-title div)
        const expandBtn = firstCategory.querySelector('.cat-title button'); 
        
        if (expandBtn) {
            expandBtn.click();
        }
    }
});

/* ---------- small UX: focus main search on topbar click (if any) ---------- */
// already available via mainSearch input

// End of script