import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { RequestService } from 'src/app/services/request.service';
import { RequestFunctionsService } from './../../../services/request-functions.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
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
  properties : any;
  isPropertiesLoaded : boolean = false;

  isResponseBack: boolean = false;


  allStatus = [false, false, false, false, false, false, false, false, false];


  oparator(op: any, arr: any) {
    return eval(arr.join(op)).toFixed(2) + '%'
  }


  constructor(private requests: RequestFunctionsService, private requestService: RequestService, private http: HttpClient) { }
  ArrayOfData: any[] = [[], [], [], [], [], [], [], [], []];

  ngOnInit(): void {

    //Get All Property
    this.http.get('http://localhost:8000/api/properties').subscribe(response=>{
      this.properties = response;
      this.isPropertiesLoaded = true;
    })

  }

  updateProperty(e : any, title : string, comment : string){
    const id = e.target.id;
    this.http.post(`http://localhost:8000/api/properties/${id}`, {title, comment}).subscribe(res=>{
      location.reload();
    })
  }




  callDataBase(searchKey: string) {
    return this.http.get(`http://localhost:8000/api/keyStatistics/${searchKey.toUpperCase()}`)
  }

  callApiAfterDataBase(searchKey: string) {
    return this.http.get(`http://public-api.quickfs.net/v1/data/all-data/${searchKey}?api_key=4ed0f30c148834139f4bb3c4421341690f3d3c07`)
  }

  storeDataFromApiToDataBase(data: any) {

    this.data = data;

    // If Company Exist
    // Start Of Send Requests
    this.apiRequest = this.requestService.data;

    this.apiRequest.name = this.data.data.metadata.name;
    this.apiRequest.description = this.data.data.metadata.description;
    this.apiRequest.country = this.data.data.metadata.country;
    this.apiRequest.symbol = this.data.data.metadata.symbol;
    this.apiRequest.exchange = this.data.data.metadata.exchange;
    this.apiRequest.industry = this.data.data.metadata.industry;
    this.apiRequest.sector = this.data.data.metadata.sector;
    this.apiRequest.qfs_symbol = this.data.data.metadata.qfs_symbol;
    this.apiRequest.market_cap = this.data.data.financials.quarterly.market_cap;
    this.apiRequest.enterprise_value = this.data.data.financials.quarterly.enterprise_value;
    this.apiRequest.volume = '';
    this.apiRequest.average_daily_volume = '';
    this.apiRequest.volume_inc_dec = '';
    this.apiRequest.price_to_earnings = this.data.data.financials.annual.price_to_earnings;
    this.apiRequest.price_to_sales = this.data.data.financials.annual.price_to_sales;
    this.apiRequest.total_revenue = [];
    this.apiRequest.cogs = this.data.data.financials.ttm.cogs;
    this.apiRequest.gross_profit = this.data.data.financials.annual.gross_profit;
    this.apiRequest.total_opex = this.data.data.financials.quarterly.total_opex;
    this.apiRequest.operating_margin = this.data.data.financials.annual.operating_margin;
    this.apiRequest.operating_income = this.data.data.financials.annual.operating_income;
    this.apiRequest.pretax_income = this.data.data.financials.quarterly.pretax_income;
    this.apiRequest.net_income = this.data.data.financials.quarterly.net_income;
    this.apiRequest.net_income_margin = this.data.data.financials.quarterly.net_income_margin;
    this.apiRequest.total_current_assets = this.data.data.financials.quarterly.total_current_assets;
    this.apiRequest.total_current_liabilities = this.data.data.financials.quarterly.total_current_liabilities;
    this.apiRequest.total_assets = this.data.data.financials.quarterly.total_assets;
    this.apiRequest.total_liabilities = this.data.data.financials.quarterly.total_liabilities;
    this.apiRequest.revenue_growth = this.data.data.financials.annual.revenue_growth;
    this.apiRequest.fcf_margin = this.data.data.financials.quarterly.fcf_margin;
    this.apiRequest.roe = this.data.data.financials.annual.roe;
    this.apiRequest.roa = this.data.data.financials.annual.roa;
    this.apiRequest.roic = this.data.data.financials.annual.roic;
    this.apiRequest.roce = this.data.data.financials.quarterly.roce;
    this.apiRequest.rotce = this.data.data.financials.annual.rotce;
    this.apiRequest.dividends_per_share_cagr_10 = this.data.data.financials.quarterly.dividends_per_share_cagr_10;
    this.apiRequest.payout_ratio = this.data.data.financials.quarterly.payout_ratio;
    this.apiRequest.debt_to_equity = this.data.data.financials.quarterly.debt_to_equity;
    this.apiRequest.debt_to_assets = this.data.data.financials.quarterly.debt_to_assets;
    this.apiRequest.equity_to_assets = this.data.data.financials.quarterly.equity_to_assets;
    this.apiRequest.assets_to_equity = this.data.data.financials.quarterly.assets_to_equity;
    this.apiRequest.revenue_per_share = this.data.data.financials.quarterly.revenue_per_share;
    this.apiRequest.ebitda_per_share = this.data.data.financials.quarterly.ebitda_per_share;
    this.apiRequest.operating_income_per_share = this.data.data.financials.quarterly.operating_income_per_share;
    this.apiRequest.pretax_income_per_share = this.data.data.financials.quarterly.pretax_income_per_share;
    this.apiRequest.fcf_per_share = this.data.data.financials.quarterly.fcf_per_share;
    this.apiRequest.book_value_per_share = this.data.data.financials.quarterly.book_value_per_share;
    this.apiRequest.shares_eop_growth = this.data.data.financials.quarterly.shares_eop_growth;
    this.apiRequest.net_income_growth = this.data.data.financials.quarterly.net_income_growth;
    this.apiRequest.gross_profit_growth = this.data.data.financials.quarterly.gross_profit_growth;
    this.apiRequest.fcf_growth = this.data.data.financials.quarterly.fcf_growth;
    this.apiRequest.ebitda_growth = this.data.data.financials.quarterly.ebitda_growth;
    this.apiRequest.operating_income_growth = this.data.data.financials.quarterly.operating_income_growth;
    this.apiRequest.total_assets_growth = this.data.data.financials.quarterly.total_assets_growth;
    this.apiRequest.total_equity_growth = this.data.data.financials.quarterly.total_equity_growth;
    this.apiRequest.cfo_growth = this.data.data.financials.quarterly.cfo_growth;
    this.apiRequest.revenue_cagr_10 = this.data.data.financials.annual.revenue_cagr_10;
    this.apiRequest.eps_diluted_cagr_10 = this.data.data.financials.annual.eps_diluted_cagr_10;
    this.apiRequest.total_assets_cagr_10 = this.data.data.financials.annual.total_assets_cagr_10;
    this.apiRequest.total_equity_cagr_10 = this.data.data.financials.annual.total_equity_cagr_10;
    this.apiRequest.fcf_cagr_10 = this.data.data.financials.annual.fcf_cagr_10;
    this.apiRequest.dividends_quarterly = this.data.data.financials.quarterly.dividends;
    this.apiRequest.dividends_annual = this.data.data.financials.annual.dividends;
    this.apiRequest.roe_median = this.data.data.financials.annual.roe_median;
    this.apiRequest.price_to_book = this.data.data.financials.quarterly.price_to_book;
    this.apiRequest.enterprise_value_to_earnings = this.data.data.financials.annual.enterprise_value_to_earnings;
    this.apiRequest.enterprise_value_to_sales = this.data.data.financials.annual.enterprise_value_to_sales;
    this.apiRequest.enterprise_value_to_pretax_income = this.data.data.financials.annual.enterprise_value_to_pretax_income;
    this.apiRequest.enterprise_value_to_fcf = this.data.data.financials.annual.enterprise_value_to_fcf;
    this.apiRequest.roa_median = this.data.data.financials.annual.roa_median;
    this.apiRequest.roic_median = this.data.data.financials.annual.roic_median;
    this.apiRequest.gross_margin_median = this.data.data.financials.quarterly.gross_margin_median;
    this.apiRequest.pretax_margin_median = this.data.data.financials.quarterly.pretax_margin_median;
    this.apiRequest.fcf_margin_median = this.data.data.financials.quarterly.fcf_margin_median;
    this.apiRequest.assets_to_equity_median = this.data.data.financials.quarterly.assets_to_equity_median;
    this.apiRequest.debt_to_equity_median = this.data.data.financials.quarterly.debt_to_equity_median;
    this.apiRequest.debt_to_assets_median = this.data.data.financials.quarterly.debt_to_assets_median;
    this.apiRequest.revenue = this.data.data.financials.annual.revenue;
    this.apiRequest.gross_margin = this.data.data.financials.annual.gross_margin;
    this.apiRequest.eps_diluted = this.data.data.financials.annual.eps_diluted;
    this.apiRequest.eps_diluted_growth = this.data.data.financials.annual.eps_diluted_growth;
    this.apiRequest.dividends_per_share_growth = this.data.data.financials.annual.dividends_per_share_growth;

    //Store Company In Our DataBase And Return Data From There
    return this.http.post<any>('http://localhost:8000/api/keyStatistics', this.requestService.data)
  }

  returnDataFromDataBase(res : any, id : any){
    console.log(res);
    this.arraysData[id] = res;
    this.allStatus[id] = true;

    this.ArrayOfData[id][0] = 'test';
    this.ArrayOfData[id][1] = 'cost';
    this.ArrayOfData[id][2] = this.arraysData[id].industry
    this.ArrayOfData[id][3] = this.arraysData[id].sector
    this.ArrayOfData[id][4] = this.arraysData[id].exchange
    this.ArrayOfData[id][5] = this.arraysData[id].market_cap.splice(-1) + '$';
    this.ArrayOfData[id][5] = (parseInt(this.ArrayOfData[id][5]) / 1000000).toFixed(0)
    this.ArrayOfData[id][6] = this.arraysData[id].enterprise_value.splice(-1)
    this.ArrayOfData[id][6] = (parseInt(this.ArrayOfData[id][6]) / 1000000).toFixed(0)
    this.ArrayOfData[id][7] = 'volume';
    this.ArrayOfData[id][8] = 'average daily volume';
    this.ArrayOfData[id][9] = 'Volume inc /dec';
    this.ArrayOfData[id][10] = 'space';
    this.ArrayOfData[id][12] = this.arraysData[id].price_to_earnings.splice(-1);
    this.ArrayOfData[id][13] = this.arraysData[id].price_to_sales.splice(-1);
    this.ArrayOfData[id][14] = 'Are The Compay Making Money?';
    this.ArrayOfData[id][15] = 'Total Revenue';
    this.ArrayOfData[id][16] = parseInt(this.arraysData[id].cogs) / 1000000;
    this.ArrayOfData[id][17] = parseInt(this.arraysData[id].gross_profit.splice(-1)) / 1000000;
    this.ArrayOfData[id][18] = parseInt(this.arraysData[id].total_opex.splice(-1));
    this.ArrayOfData[id][18] = this.ArrayOfData[id][18]  / 1000000;
    this.ArrayOfData[id][19] = (this.arraysData[id].roic.splice(-2));
    this.ArrayOfData[id][19] = (parseFloat(this.ArrayOfData[id][19][1]) - parseFloat(this.ArrayOfData[id][19][0])) / parseFloat(this.ArrayOfData[id][19][1])
    this.ArrayOfData[id][19] = (this.ArrayOfData[id][19] * 100).toFixed(2) + '%'
    this.ArrayOfData[id][20] = (this.arraysData[id].roce.splice(-2));
    this.ArrayOfData[id][20] = (parseFloat(this.ArrayOfData[id][20][1]) - parseFloat(this.ArrayOfData[id][20][0])) / parseFloat(this.ArrayOfData[id][20][1])
    this.ArrayOfData[id][20] = (this.ArrayOfData[id][20] * 100).toFixed(2) + '%'
    this.ArrayOfData[id][21] = this.oparator('+', this.arraysData[id].roe);
    this.ArrayOfData[id][21] = this.oparator('+', this.arraysData[id].rotce);
    this.ArrayOfData[id][22] = this.arraysData[id].dividends_quarterly
    this.ArrayOfData[id][23] = (this.arraysData[id].dividende_quarterly / this.arraysData[id].current_stock_price);
    this.ArrayOfData[id][25] = this.arraysData[id].payout_ratio.splice(-1);
    this.ArrayOfData[id][27] = this.arraysData[id].debt_to_equity.splice(-1);
    this.ArrayOfData[id][28] = this.arraysData[id].debt_to_assets.splice(-1);
    this.ArrayOfData[id][29] = this.arraysData[id].assets_to_equity.splice(-1);
    this.ArrayOfData[id][31] = this.arraysData[id].revenue_per_share.splice(-1);
    this.ArrayOfData[id][32] = this.arraysData[id].ebitda_per_share.splice(-1);
    this.ArrayOfData[id][33] = this.arraysData[id].revenue_per_share / this.arraysData[id].current_stock_price;
    this.ArrayOfData[id][34] = this.arraysData[id].ebitda_per_share / this.arraysData[id].current_stock_price;
    this.ArrayOfData[id][35] = this.arraysData[id].operating_income.splice(-1);
    this.ArrayOfData[id][36] = (this.arraysData[id].operating_income / this.arraysData[id].current_stock_price)
    this.ArrayOfData[id][37] = this.arraysData[id].pretax_income_per_shar;
    this.ArrayOfData[id][38] = (this.arraysData[id].pretax_income_per_share / this.arraysData[id].current_stock_price);
    this.ArrayOfData[id][39] = this.arraysData[id].fcf_per_share.splice(-1);
    this.ArrayOfData[id][40] = 'shares outstanding';
    this.ArrayOfData[id][41] = 'avaliable share';
    this.ArrayOfData[id][42] = 'beta';
    this.ArrayOfData[id][43] = this.arraysData[id].total_assets_growth.splice(-1);
    this.ArrayOfData[id][44] = this.arraysData[id].total_equity_growth.splice(-1);
    this.ArrayOfData[id][45] = this.arraysData[id].cfo_growth.splice(-1);
    this.ArrayOfData[id][46] = 'black line'
    this.ArrayOfData[id][47] = this.arraysData[id].revenue_cagr_10.splice(-1);
    this.ArrayOfData[id][48] = 'Diluted EPS 10-Period CAGR';
    this.ArrayOfData[id][49] = this.arraysData[id].total_assets_cagr_10.splice(-1);
    this.ArrayOfData[id][50] = this.arraysData[id].total_equity_cagr_10.splice(-1);
    this.ArrayOfData[id][51] = this.arraysData[id].fcf_cagr_10.splice(-1);
    this.isResponseBack = true;
  }


  arraysData: any = [Object(), Object(), Object(), Object(), Object(), Object(), Object()];

  getData(e: any, searchKey: string) {

    let id = Number(e.target.id);

    //first CAll
    this.callDataBase(searchKey).subscribe(res => {

      if (res == null) {
        //Second Call
        this.callApiAfterDataBase(searchKey).subscribe(res => {
          this.arraysData[id] = res;

          if (this.arraysData[id].errors) {
            alert('Company Not Found');
            e.target.value = '';
            return;
          };

          //Third CAll
          this.storeDataFromApiToDataBase(this.arraysData[id]).subscribe(res => {
            this.returnDataFromDataBase(res, id);
          });

        });

      } else {
        this.returnDataFromDataBase(res, id);
      }

    }, console.error);
  }

  status: boolean = false;

  statusOne: boolean = false;
  getDataOne(searchKey: string) {
    this.data = this.requests.getData(searchKey);
    this.statusOne = true;
  }


}
