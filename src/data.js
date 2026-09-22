export const holdings = [
{id:'LT',name:'Larsen & Toubro',sector:'Infrastructure',return:-11.12,note:'Infrastructure spending and input costs were among the factors considered for the engineering business.'},
{id:'ASIANPAINT',name:'Asian Paints',sector:'Paints & consumer goods',return:4.05,note:'The study considered consumer demand and input costs. This holding contributed positively to the portfolio.'},
{id:'ICICIBANK',name:'ICICI Bank',sector:'Banking',return:-1.15,note:'Interest rates were a focus in the banking analysis. ICICI Bank had the smallest decline of the three losing holdings.'},
{id:'HINDUNILVR',name:'Hindustan Unilever',sector:'FMCG',return:5.15,note:'The strongest performer in the basket. The project considered consumer demand, input costs and earnings.'},
{id:'TCS',name:'Tata Consultancy Services',sector:'Information technology',return:-8.55,note:'The IT holding recorded the second-largest decline. Earnings and sector conditions were considered in the analysis.'}
];
export const entryValue=200000;
export const money = n => `${n<0?'−':''}₹${Math.abs(Math.round(n)).toLocaleString('en-IN')}`;
export const percent = (n, digits=2) => `${n<0?'−':'+'}${Math.abs(n).toFixed(digits)}%`;
export const change = stock => Math.round(entryValue*stock.return/100);
export const compoundReturn = (r,days) => (Math.pow(1+r/100,days/9)-1)*100;
export function makeCSV(){return '\uFEFF'+[['Stock','Industry','Weight %','Entry INR','Return %','Change INR','End value INR'],...holdings.map(s=>[s.name,s.sector,20,entryValue,s.return,change(s),entryValue+change(s)]),['TOTAL','',100,1000000,-2.324,-23240,976760]].map(row=>row.map(v=>'"'+String(v).replaceAll('"','""')+'"').join(',')).join('\r\n');}
