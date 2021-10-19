import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { RequestService } from 'src/app/services/request.service';
import { UserService } from 'src/app/services/user.service';
import { RequestFunctionsService } from './../../../services/request-functions.service';
import { ApiService } from './../../../services/api.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  //-========================= Define Arrays To Operations ===========================//

  grossprofitGrowthArr: any = [];
  maxGrossProfitGrowthArr: any;
  minGrossProfitGrowthArr: any;

  freeCashFlowGrowthArr: any = [];
  maxFreeCashFlowGrowthArr: any;
  minFreeCashFlowGrowthArr: any;


  totalAssetsGrowthArr: any = [];
  maxTotalAssetsGrowthArr: any;
  minTotalAssetsGrowthArr: any;

  totalEquityGrowthArr: any = [];
  maxTotalEquityGrowthArr: any;
  minTotalEquityGrowthArr: any;

  cashFromOperationsGrowthArr: any = [];
  maxCashFromOperationsGrowthArr: any;
  minCashFromOperationsGrowthArr: any;

  revenue10PeriodCagrArr: any = [];
  maxRevenue10PeriodCagrArr: any;
  minRevenue10PeriodCagrArr: any;








  loaderStarted: boolean = false;
  numbers: any;
  apiRequest: any;
  dataCompanyOne: any;
  industry: any;
  data: any;
  sector: any;
  exchange: any;
  marketCap: any;
  // marketCapFixed:any;
  enterprise: any;
  enterpriseFixed: any;
  PE: any;
  PS: any;
  Cost_of_goods_sold: any;
  gross_profit: any;
  total_operation: any;
  ROIC: any;
  five_r_indiator: any;
  dividende_per_share: any;
  dividend_yield: any;
  payout_ratio: any;
  debt_to_equity: any;
  debt_to_assets: any;
  assets_to_equity: any;
  revenue_per_share: any;
  ebitda_per_share: any;
  revenue_per_share_ratio: any;
  ebitda_per_share_ratio: any;
  operating_income_per_share: any;
  operating_income_per_share_ratio: any;
  pretax_income_per_share: any;
  pretax_income_per_share_ratio: any;
  free_cash_flow_per_share: any;
  total_assets_growth: any;
  total_equity_growth: any;
  cash_from_operating_growth: any;
  revenue_cagr_10: any;
  total_assets_cagr_10: any;
  total_equity_cagr_10: any;
  free_cash_flow_10_period: any;
  dlkfj: any;
  properties: any;
  isPropertiesLoaded: boolean = false;

  isResponseBack: boolean = false;
  isAdmin: boolean = false;


  allStatus = [false, false, false, false, false, false, false, false, false, false];


  oparator(op: any, arr: any) {
    return eval(arr.join(op)).toFixed(2) + '%'
  }


  constructor(private requestService: RequestService, private apiService: ApiService, private userService: UserService) { }
  ArrayOfData: any[] = [[], [], [], [], [], [], [], [], [], []];

  ngOnInit(): void {
    this.isAdmin = this.userService.isAdmin();
    console.log(this.userService.getToken());
    //Get All Property
    this.apiService.get('http://localhost:8000/api/properties',
      { headers: { 'Authorization': this.userService.getToken() } }
    ).subscribe(response => {
      this.properties = response;
      console.log(this.properties)
      this.properties = this.properties.splice(0, 52);
      this.isPropertiesLoaded = true;
    })

  }

  updateProperty(e: any, title: string, comment: string) {
    const id = e.target.id;
    this.apiService.post(`http://localhost:8000/api/properties/${id}`, { title, comment },
      { headers: { 'Authorization': this.userService.getToken() } }
    ).subscribe(res => {
      const response: any = res;
      response.msg ? alert('Method Not Allowed') : location.reload();
    })
  }




  callDataBase(searchKey: string) {
    if (searchKey.includes(':')) {
      searchKey = searchKey.substring(0, searchKey.lastIndexOf(':'));
    };
    return this.apiService.get(`http://localhost:8000/api/keyStatistics/${searchKey.toUpperCase()}`,
      { headers: { 'Authorization': this.userService.getToken() } }
    );
  }

  callApiAfterDataBase(searchKey: string) {
    return this.apiService.get(`http://public-api.quickfs.net/v1/data/all-data/${searchKey}?api_key=4ed0f30c148834139f4bb3c4421341690f3d3c07`)
  }

  getPriceDataFromItsApi(data: any) {
    return this.apiService.get('https://public-api.quickfs.net/v1/market-data/last-close/US?api_key=4ed0f30c148834139f4bb3c4421341690f3d3c07')
  }

  storeDataFromApiToDataBase(data: any) {

    this.data = data;






    // If Company Exist
    // Start Of Send Requests
    this.apiRequest = this.requestService.data;

    //Latest Data in Requirements file
    this.apiRequest.shares_basic =  this.data.data.financials.ttm.shares_basic;
    this.apiRequest.shares_diluted = this.data.data.financials.ttm.shares_diluted;
    console.log('diluted', this.apiRequest.shared_diluted)
    this.apiRequest.eps_diluted_cagr_10 = this.data.data.financials.annual.eps_diluted_cagr_10;

    this.apiRequest.price = this.data.price;
    this.apiRequest.volume = this.data.volume;
    this.apiRequest.market_cap = this.data.market_cap;
    this.apiRequest.pe_ratio = this.data.pe_ratio;
    this.apiRequest.ps_ratio = this.data.ps_ratio;
    this.apiRequest.pb_ratio = this.data.pb_ratio;


    this.apiRequest.name = this.data.data.metadata.name;
    this.apiRequest.description = this.data.data.metadata.description;
    this.apiRequest.country = this.data.data.metadata.country;
    this.apiRequest.symbol = this.data.data.metadata.symbol;
    this.apiRequest.exchange = this.data.data.metadata.exchange;
    this.apiRequest.industry = this.data.data.metadata.industry;
    this.apiRequest.sector = this.data.data.metadata.sector;
    this.apiRequest.qfs_symbol = this.data.data.metadata.qfs_symbol;
    this.apiRequest.enterprise_value = this.data.data.financials.annual.enterprise_value;
    this.apiRequest.cogs = this.data.data.financials.ttm.cogs;
    this.apiRequest.gross_profit = this.data.data.financials.annual.gross_profit;
    this.apiRequest.total_opex = this.data.data.financials.annual.total_opex;
    this.apiRequest.operating_margin = this.data.data.financials.annual.operating_margin;
    this.apiRequest.operating_income = this.data.data.financials.annual.operating_income;
    this.apiRequest.pretax_income = this.data.data.financials.annual.pretax_income;
    this.apiRequest.net_income = this.data.data.financials.annual.net_income;
    this.apiRequest.net_income_margin = this.data.data.financials.annual.net_income_margin;
    this.apiRequest.total_current_assets = this.data.data.financials.annual.total_current_assets;
    this.apiRequest.total_current_liabilities = this.data.data.financials.annual.total_current_liabilities;
    this.apiRequest.total_assets = this.data.data.financials.annual.total_assets;
    this.apiRequest.total_liabilities = this.data.data.financials.annual.total_liabilities;
    this.apiRequest.revenue_growth = this.data.data.financials.annual.revenue_growth;
    this.apiRequest.fcf_margin = this.data.data.financials.annual.fcf_margin;
    this.apiRequest.roe = this.data.data.financials.annual.roe;
    this.apiRequest.roa = this.data.data.financials.annual.roa;
    this.apiRequest.roic = this.data.data.financials.annual.roic;
    this.apiRequest.roce = this.data.data.financials.annual.roce;
    this.apiRequest.rotce = this.data.data.financials.annual.rotce;
    this.apiRequest.dividends_per_share_cagr_10 = this.data.data.financials.annual.dividends_per_share_cagr_10;
    this.apiRequest.payout_ratio = this.data.data.financials.annual.payout_ratio;
    this.apiRequest.debt_to_equity = this.data.data.financials.annual.debt_to_equity;
    this.apiRequest.debt_to_assets = this.data.data.financials.annual.debt_to_assets;
    this.apiRequest.equity_to_assets = this.data.data.financials.annual.equity_to_assets;
    this.apiRequest.assets_to_equity = this.data.data.financials.annual.assets_to_equity;
    this.apiRequest.revenue_per_share = this.data.data.financials.annual.revenue_per_share;
    this.apiRequest.ebitda_per_share = this.data.data.financials.annual.ebitda_per_share;
    this.apiRequest.operating_income_per_share = this.data.data.financials.annual.operating_income_per_share;
    this.apiRequest.pretax_income_per_share = this.data.data.financials.annual.pretax_income_per_share;
    this.apiRequest.fcf_per_share = this.data.data.financials.annual.fcf_per_share;
    this.apiRequest.book_value_per_share = this.data.data.financials.annual.book_value_per_share;
    this.apiRequest.shares_eop_growth = this.data.data.financials.annual.shares_eop_growth;

    // New
    this.apiRequest.shares_eop = this.data.data.financials.annual.shares_eop;



    this.apiRequest.net_income_growth = this.data.data.financials.annual.net_income_growth;
    this.apiRequest.gross_profit_growth = this.data.data.financials.annual.gross_profit_growth;
    this.apiRequest.fcf_growth = this.data.data.financials.annual.fcf_growth;
    this.apiRequest.ebitda_growth = this.data.data.financials.annual.ebitda_growth;
    this.apiRequest.operating_income_growth = this.data.data.financials.annual.operating_income_growth;
    this.apiRequest.total_assets_growth = this.data.data.financials.annual.total_assets_growth;
    this.apiRequest.total_equity_growth = this.data.data.financials.annual.total_equity_growth;
    this.apiRequest.cfo_growth = this.data.data.financials.annual.cfo_growth;
    this.apiRequest.revenue_cagr_10 = this.data.data.financials.annual.revenue_cagr_10;
    this.apiRequest.eps_diluted_cagr_10 = this.data.data.financials.annual.eps_diluted_cagr_10;
    this.apiRequest.total_assets_cagr_10 = this.data.data.financials.annual.total_assets_cagr_10;
    this.apiRequest.total_equity_cagr_10 = this.data.data.financials.annual.total_equity_cagr_10;
    this.apiRequest.fcf_cagr_10 = this.data.data.financials.annual.fcf_cagr_10;
    this.apiRequest.dividends = this.data.data.financials.annual.dividends;
    this.apiRequest.roe_median = this.data.data.financials.annual.roe_median;
    this.apiRequest.price_to_book = this.data.data.financials.annual.price_to_book;
    this.apiRequest.enterprise_value_to_earnings = this.data.data.financials.annual.enterprise_value_to_earnings;
    this.apiRequest.enterprise_value_to_sales = this.data.data.financials.annual.enterprise_value_to_sales;
    this.apiRequest.enterprise_value_to_pretax_income = this.data.data.financials.annual.enterprise_value_to_pretax_income;
    this.apiRequest.enterprise_value_to_fcf = this.data.data.financials.annual.enterprise_value_to_fcf;
    this.apiRequest.roa_median = this.data.data.financials.annual.roa_median;
    this.apiRequest.roic_median = this.data.data.financials.annual.roic_median;
    this.apiRequest.gross_margin_median = this.data.data.financials.annual.gross_margin_median;
    this.apiRequest.pretax_margin_median = this.data.data.financials.annual.pretax_margin_median;
    this.apiRequest.fcf_margin_median = this.data.data.financials.annual.fcf_margin_median;
    this.apiRequest.assets_to_equity_median = this.data.data.financials.annual.assets_to_equity_median;
    this.apiRequest.debt_to_equity_median = this.data.data.financials.annual.debt_to_equity_median;
    this.apiRequest.debt_to_assets_median = this.data.data.financials.annual.debt_to_assets_median;
    this.apiRequest.revenue = this.data.data.financials.annual.revenue;
    this.apiRequest.gross_margin = this.data.data.financials.annual.gross_margin;
    this.apiRequest.eps_diluted = this.data.data.financials.annual.eps_diluted;
    this.apiRequest.eps_diluted_growth = this.data.data.financials.annual.eps_diluted_growth;
    this.apiRequest.dividends_per_share_growth = this.data.data.financials.annual.dividends_per_share_growth;


    // Store Company In Our DataBase And Return Data From There
    return this.apiService.post('http://localhost:8000/api/keyStatistics', this.requestService.data,
      { headers: { 'Authorization': this.userService.getToken() } }
    )

  }


  returnDataFromDataBase(res: any, id: any) {
    // console.log(res);
    this.arraysData[id] = res;
    this.allStatus[id] = true;

    this.ArrayOfData[id][0] = this.arraysData[id].price + '$';
    this.ArrayOfData[id][1] = this.arraysData[id].price;
    this.ArrayOfData[id][2] = this.arraysData[id].industry
    this.ArrayOfData[id][3] = this.arraysData[id].sector
    this.ArrayOfData[id][4] = this.arraysData[id].exchange
    this.ArrayOfData[id][5] = this.arraysData[id].market_cap;
    this.ArrayOfData[id][6] = this.arraysData[id].enterprise_value.splice(-1)[0]
    this.ArrayOfData[id][6] = (parseInt(this.ArrayOfData[id][6]) / 1000000).toFixed(0)
    this.ArrayOfData[id][7] = this.arraysData[id].volume;
    this.ArrayOfData[id][8] = (Number(this.ArrayOfData[id][7]) / 14);
    this.ArrayOfData[id][9] = (Number(this.arraysData[id].volume) - this.ArrayOfData[id][8]) / this.ArrayOfData[id][8] + '%';
    this.ArrayOfData[id][10] = (Number(this.arraysData[id].shares_basic) / Number(this.arraysData[id].shares_diluted))

    this.ArrayOfData[id][12] = this.arraysData[id].pe_ratio;
    this.ArrayOfData[id][13] = this.arraysData[id].ps_ratio;
    this.ArrayOfData[id][14] = '';
    this.ArrayOfData[id][15] = this.arraysData[id].revenue.reduce((a: any, b: any) => { return a + b }, 0);
    this.ArrayOfData[id][15] = this.ArrayOfData[id][15].toLocaleString();
    this.ArrayOfData[id][16] = parseInt(this.arraysData[id].cogs) / 1000000;
    this.ArrayOfData[id][17] = parseInt(this.arraysData[id].gross_profit.splice(-1)[0]) / 1000000;
    this.ArrayOfData[id][18] = parseInt(this.arraysData[id].total_opex.splice(-1)[0]);
    this.ArrayOfData[id][18] = this.ArrayOfData[id][18] / 1000000;
    this.ArrayOfData[id][19] = (this.arraysData[id].roic.splice(-1)[0] * 100).toFixed(1) + '%';
    this.ArrayOfData[id][20] = (this.arraysData[id].roce.splice(-1)[0] * 100).toFixed(1) + '%';
    this.ArrayOfData[id][21] = (this.arraysData[id].rotce.splice(-1)[0] * 100).toFixed(1) + '%';
    this.ArrayOfData[id][22] = (this.arraysData[id].rotce.splice(-1)[0] * 100).toFixed(1) + '%';
    this.ArrayOfData[id][23] = this.arraysData[id].dividends.splice(-1)[0] + '$';
    this.ArrayOfData[id][24] = (Number(this.arraysData[id].dividends.splice(-1)[0]) / Number(this.arraysData[id].price)).toFixed(2);
    this.ArrayOfData[id][25] = this.arraysData[id].payout_ratio.splice(-1)[0] * 100 + '%';
    this.ArrayOfData[id][27] = this.arraysData[id].debt_to_equity.splice(-1)[0].toFixed(2);
    this.ArrayOfData[id][28] = this.arraysData[id].debt_to_assets.splice(-1)[0].toFixed(2);
    this.ArrayOfData[id][29] = this.arraysData[id].assets_to_equity.splice(-1)[0].toFixed(2);
    this.ArrayOfData[id][31] = this.arraysData[id].revenue_per_share.splice(-1)[0].toFixed(2) + '$';
    this.ArrayOfData[id][32] = this.arraysData[id].ebitda_per_share.splice(-1)[0].toFixed(2) + '$';
    this.ArrayOfData[id][33] = (Number(this.arraysData[id].revenue_per_share.splice(-1)[0]) / Number(this.arraysData[id].price)).toFixed(2);
    this.ArrayOfData[id][34] = (Number(this.arraysData[id].ebitda_per_share.splice(-1)[0]) / Number(this.arraysData[id].price)).toFixed(1);
    this.ArrayOfData[id][35] = (this.arraysData[id].operating_income.splice(-1)[0] / 1000000).toFixed(2) + '$';
    this.ArrayOfData[id][36] = (Number(this.arraysData[id].operating_income.splice(-1)[0]) / Number(this.arraysData[id].price)).toFixed(2);
    this.ArrayOfData[id][37] = this.arraysData[id].pretax_income_per_share.splice(-1)[0].toFixed(2);
    this.ArrayOfData[id][38] = (Number(this.arraysData[id].pretax_income_per_share.splice(-1)[0]) / Number(this.arraysData[id].price)).toFixed(2);
    this.ArrayOfData[id][39] = this.arraysData[id].fcf_per_share.splice(-1)[0].toFixed(2) + '$';
    this.ArrayOfData[id][40] = this.arraysData[id].shares_basic / 1000000;
    this.ArrayOfData[id][41] = this.arraysData[id].shares_diluted / 1000000;
    this.ArrayOfData[id][42] = 'beta';
    this.ArrayOfData[id][43] = (this.arraysData[id].total_assets_growth.splice(-1)[0] * 100).toFixed(1) + '%';
    this.ArrayOfData[id][44] = (this.arraysData[id].total_equity_growth.splice(-1)[0] * 100).toFixed(1) + '%';
    this.ArrayOfData[id][45] = (this.arraysData[id].cfo_growth.splice(-1)[0] * 100).toFixed(1) + '%';
    this.ArrayOfData[id][46] = 'black line'
    this.ArrayOfData[id][47] = (this.arraysData[id].revenue_cagr_10.splice(-1)[0] * 100).toFixed(1) + '%';
    this.ArrayOfData[id][48] = (this.arraysData[id].eps_diluted_cagr_10.splice(-1)[0] * 100).toFixed(1) + '%';
    this.ArrayOfData[id][49] = (this.arraysData[id].total_assets_cagr_10.splice(-1)[0] * 100).toFixed(1) + '%';
    this.ArrayOfData[id][50] = (this.arraysData[id].total_equity_cagr_10.splice(-1)[0] * 100).toFixed(1) + '%';
    this.ArrayOfData[id][51] = (this.arraysData[id].fcf_cagr_10.splice(-1)[0] * 100).toFixed(1) + '%';


    // push values to operating it
    this.grossprofitGrowthArr.push(this.ArrayOfData[id][17])
    this.maxGrossProfitGrowthArr = this.getMax(this.grossprofitGrowthArr)
    this.minGrossProfitGrowthArr = this.getMin(this.grossprofitGrowthArr)

    this.freeCashFlowGrowthArr.push(this.ArrayOfData[id][39])
    this.maxFreeCashFlowGrowthArr = this.getMax(this.freeCashFlowGrowthArr)
    this.minFreeCashFlowGrowthArr = this.getMin(this.freeCashFlowGrowthArr)

    this.totalAssetsGrowthArr.push(this.ArrayOfData[id][49])
    this.maxTotalAssetsGrowthArr = this.getMax(this.totalAssetsGrowthArr)
    this.minTotalAssetsGrowthArr = this.getMin(this.totalAssetsGrowthArr)

    this.totalEquityGrowthArr.push(this.ArrayOfData[id][50])
    this.maxTotalEquityGrowthArr = this.getMax(this.totalEquityGrowthArr)
    this.minTotalEquityGrowthArr = this.getMin(this.totalEquityGrowthArr)

    this.cashFromOperationsGrowthArr.push(this.ArrayOfData[id][45])
    this.maxCashFromOperationsGrowthArr = this.getMax(this.cashFromOperationsGrowthArr)
    this.minCashFromOperationsGrowthArr = this.getMin(this.cashFromOperationsGrowthArr)

    this.revenue10PeriodCagrArr.push(this.ArrayOfData[id][45])
    this.maxRevenue10PeriodCagrArr = this.getMax(this.revenue10PeriodCagrArr)
    this.minRevenue10PeriodCagrArr = this.getMin(this.revenue10PeriodCagrArr)



    this.loaderStarted = false;
    this.isResponseBack = true;

    // Daily tests
    // console.log(this.arraysData[id].financials.annual.shares_basic)

  }


  arraysData: any = [Object(), Object(), Object(), Object(), Object(), Object(), Object()];

  getData(e: any, searchKey: string) {
    this.loaderStarted = true;
    let id = Number(e.target.id);

    //first CAll
    this.callDataBase(searchKey).subscribe(res => {

      if (res == null) {
        //Second Call
        this.callApiAfterDataBase(searchKey).subscribe(res => {
          this.arraysData[id] = res;

          try {
            this.arraysData[id].qfs_symbol = this.arraysData[id].data.metadata.qfs_symbol;

            if (this.arraysData[id].errors) {
              alert('Company Not Found');
              e.target.value = '';
              this.loaderStarted = false;
              return;
            };

            // Third Call
            this.getPriceDataFromItsApi(this.data).subscribe(response => {

              this.apiRequest = response;

              const targetItem = this.apiRequest.data.find((item: any) => {
                const searchValue = item.qfs_symbol_v2;
                if (searchValue == this.arraysData[id].qfs_symbol) {
                  return item;
                }
              });

              if (!targetItem) {
                alert('Company Not Found');
                e.target.value = '';
                this.loaderStarted = false;
                return;
              }

              this.arraysData[id].price = targetItem.price.toString();
              this.arraysData[id].volume = targetItem.volume.toString();
              this.arraysData[id].market_cap = targetItem.mkt_cap;
              this.arraysData[id].pe_ratio = targetItem.pe;
              this.arraysData[id].ps_ratio = targetItem.ps;
              this.arraysData[id].pb_ratio = targetItem.pb;




              //Fourth CAll
              this.storeDataFromApiToDataBase(this.arraysData[id]).subscribe(res => {
                this.returnDataFromDataBase(res, id);
                localStorage.latestSearchKey = searchKey;
              }, console.error);

            }, error => alert('company not found'))

          } catch (err) {
            alert('Company Not Found');
            e.target.value = '';
            this.loaderStarted = false;
            return;
          }

        }, console.error);

      } else {
        this.returnDataFromDataBase(res, id);
      }

    }, console.error);
  }


  //-------------------------------------------------------- Operating ------------------------------//
  //1- Gross Profit Growth
  // Get maximum value from array

  // testArr:any = [0,2,4,5,2,5,66]
  getMax(arr: any) {
    return Math.max.apply(null, arr)
  }

  getMin(arr: any) {
    return Math.min.apply(null, arr)
  }

}
