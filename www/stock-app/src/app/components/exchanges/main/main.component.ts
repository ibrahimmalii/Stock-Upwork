import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private http: HttpClient, private requestService : RequestService) { }

  responseData: any;
  financials: any;
  data: any;
  requestData: any;
  apiRequest : any;
  isPageLoaded : boolean = false;


  ngOnInit(): void {
    this.data = localStorage.responseData
    this.data = JSON.parse(this.data);


    // Chanang Of Requests
    // 1- Check If Country In DataBase Or Not













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
    this.apiRequest.pe_ratio = this.data.data.financials.annual.price_to_earnings;
    this.apiRequest.ps_ratio = this.data.data.financials.annual.price_to_sales;
    this.apiRequest.total_revenue = [];
    this.apiRequest.cogs = this.data.data.financials.ttm.cogs;
    this.apiRequest.gross_profit = this.data.data.financials.annual.gross_profit;
    this.apiRequest.total_opex = this.data.data.financials.quarterly.total_opex;
    this.apiRequest.operating_margin = this.data.data.financials.quarterly.operating_margin;
    this.apiRequest.operating_income = this.data.data.financials.quarterly.operating_income;
    this.apiRequest.pretax_income = this.data.data.financials.quarterly.pretax_income;
    this.apiRequest.net_income = this.data.data.financials.quarterly.net_income;
    this.apiRequest.net_income_margin = this.data.data.financials.quarterly.net_income_margin;
    this.apiRequest.total_current_assets = this.data.data.financials.quarterly.total_current_assets;
    this.apiRequest.total_current_liabilities = this.data.data.financials.quarterly.total_current_liabilities;
    this.apiRequest.total_assets = this.data.data.financials.quarterly.total_assets;
    this.apiRequest.total_liabilities = this.data.data.financials.quarterly.total_liabilities;
    this.apiRequest.revenue_growth = this.data.data.financials.quarterly.revenue_growth;
    this.apiRequest.fcf_margin = this.data.data.financials.quarterly.fcf_margin;
    this.apiRequest.roe = this.data.data.financials.annual.roe;
    this.apiRequest.roa = this.data.data.financials.annual.roa;
    this.apiRequest.roic = this.data.data.financials.annual.roic;
    this.apiRequest.roce = this.data.data.financials.annual.roce;
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
    this.apiRequest.revenue_cagr_10 = this.data.data.financials.quarterly.revenue_cagr_10;
    this.apiRequest.eps_diluted_cagr_10 = this.data.data.financials.quarterly.eps_diluted_cagr_10;
    this.apiRequest.total_assets_cagr_10 = this.data.data.financials.quarterly.total_assets_cagr_10;
    this.apiRequest.total_equity_cagr_10 = this.data.data.financials.quarterly.total_equity_cagr_10;
    this.apiRequest.fcf_cagr_10 = this.data.data.financials.quarterly.fcf_cagr_10;
    this.apiRequest.price_to_earnings = this.data.data.financials.quarterly.price_to_earnings;
    this.apiRequest.price_to_sales = this.data.data.financials.quarterly.price_to_sales;
    this.apiRequest.dividends = this.data.data.financials.quarterly.dividends;
    this.apiRequest.roe_median = this.data.data.financials.quarterly.roe_median;




    // this.http.post('http://localhost:8000/api/keyStatistics',this.requestService.data).subscribe(res=>{
    //   console.log(res);
    // })

    // this.http.get('http://localhost:8000/api/keyStatistics/MSFT').subscribe(res=>{
    //   this.responseData = res;
    //   this.isPageLoaded = true
    //   console.log(res);
    // })



    // console.log(this.data.financials.annual.revenue);
    // console.log(this.data);
    // this.financials = this.data.financials;
    // console.log(this.data.financials)
    // console.log(this.data.metadata.name)
    // this.http.get('http://public-api.quickfs.net/v1/data/all-data/MSFT?api_key=4ed0f30c148834139f4bb3c4421341690f3d3c07').subscribe(res => {
    //   console.log(res);
    //   this.responseData = res;
    //   localStorage.responseData = JSON.stringify(this.responseData)
    // })
  }

}
