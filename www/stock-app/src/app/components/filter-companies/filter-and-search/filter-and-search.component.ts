import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { RequestService } from 'src/app/services/request.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-filter-and-search',
  templateUrl: './filter-and-search.component.html',
  styleUrls: ['./filter-and-search.component.css']
})
export class FilterAndSearchComponent implements OnInit {

  constructor(private userService: UserService, private apiService: ApiService, private requestService: RequestService) { }

    symbols: any;
    someSymbols : any;
    searchResult : any;
    firstLoading : boolean = false;
    loaderStarted : boolean = false;



    isPageLoaded: boolean = false;
    isResponseGet: boolean = false;
    responseData: any;
    financials: any;
    data: any;
    apiRequest: any;
    names: any;
    searchData: any;
    associatedArr: any;
    symbol: any;
    name: any;

    // Best Mode
    PE: any;
    PS: any;
    maps: any;
    collect: any;
    fixed: any;
    dataQuart: any;
    operatingMargin: any
    netIncomeMargin: any
    totalLibilites: any
    totalAssets: any
    total: any
    revenueGrowth: any
    calculater: any
    roeMedian: any
    roce: any
    roceFixed: any
    flowPerShare: any
    flowPerShareFixed: any
    price: any
    marketCap: any
    marketCapFixed: any
    industry: any
    currency: any
    revenue_per_share: any;
    ebitda_per_share: any;
    operating_income_per_share: any
    pretax_income_per_share: any
    revenueRatio: any
    dividends_quarterly: any
    dividendsFixed: any
    deptToEquity: any
    deptToEquityFixed: any
    total_revenue: any



    // One
    PB: any;
    enterprise_value_to_sales: any;
    enterprise_value_to_pretax_income: any;
    enterprise_value_to_fcf: any;
    roa_median: any;
    roe_median: any;
    roic_median: any;
    revenue_cagr_10: any;
    total_assets_cagr_10: any;
    fcf_cagr_10: any;
    eps_diluted_cagr_10: any;
    gross_margin_median: any;
    pretax_margin_median: any;
    fcf_margin_median: any;
    debt_to_assets_median: any;
    debt_to_equity_median: any;
    assets_to_equity_median: any;
    enterprise_value_to_earnings: any;

    // Two
    revenue: any;
    revenue_growth: any;
    gross_profit: any;
    gross_margin: any;
    operating_income: any;
    operating_margin: any;
    eps_diluted_growth: any;
    dividends_annual: any;
    roa: any;
    roe: any;
    roic: any;
    eps_diluted: any;
    dividends_per_share_growth: any;


    oparator(op: any, arr: any) {
      let result = eval(arr.join(op));
      let fixedResult = result.toFixed(2) + '%';
      return fixedResult;
    }

    searchInSymbols(searchKey : string){
      this.renderSearch(this.symbols, searchKey);
    }

    //=============================== Search for users =========================//
    renderSearch(arr : any , searchText : string){
      this.searchResult =  arr.filter((symbol:any)=>{
        return symbol.toLowerCase().includes(searchText.toLowerCase());
      });

      // usersCounter.innerHTML = `<span>Users : ${searchResult.length}</span>`;
      // users.innerHTML = '';
      if(this.searchResult.length != 0){
        return this.searchResult;
        // searchResult.forEach((element:any) => {
        //   console.log(element);
        // });

      } else {
        console.log(searchText);
      }
    }

  ngOnInit(): void {

    // Get And Store Symbols
    // this.apiService.get('https://public-api.quickfs.net/v1/companies/US?api_key=4ed0f30c148834139f4bb3c4421341690f3d3c07').subscribe(response => {
    //     console.log(response);
    //     localStorage.symbolOne = JSON.stringify(response);
    // },console.error);

    // this.apiService.get('https://public-api.quickfs.net/v1/companies/NZ?api_key=4ed0f30c148834139f4bb3c4421341690f3d3c07').subscribe(response => {
    //     console.log(response);
    //     localStorage.symbolTwo = JSON.stringify(response);
    // },console.error);

    // this.apiService.get('https://public-api.quickfs.net/v1/companies/MM?api_key=4ed0f30c148834139f4bb3c4421341690f3d3c07').subscribe(response => {
    //     console.log(response);
    //     localStorage.symbolThree = JSON.stringify(response);
    // },console.error);

    // this.apiService.get('https://public-api.quickfs.net/v1/companies/LN?api_key=4ed0f30c148834139f4bb3c4421341690f3d3c07').subscribe(response => {
    //     console.log(response);
    //     localStorage.symbolFour = JSON.stringify(response);
    // },console.error);

    // this.apiService.get('https://public-api.quickfs.net/v1/companies/CA?api_key=4ed0f30c148834139f4bb3c4421341690f3d3c07').subscribe(response => {
    //     console.log(response);
    //     localStorage.symbolFive = JSON.stringify(response);
    // },console.error);

    // this.apiService.get('https://public-api.quickfs.net/v1/companies/AU?api_key=4ed0f30c148834139f4bb3c4421341690f3d3c07').subscribe(response => {
    //     console.log(response);
    //     localStorage.symbolSix = JSON.stringify(response);
    // },console.error);

    // let one = JSON.parse(localStorage.symbolOne);
    // one = one.data;
    // console.log(one);
    // let two = JSON.parse(localStorage.symbolTwo);
    // two = two.data;
    // console.log(two);
    // let three = JSON.parse(localStorage.symbolThree);
    // three = three.data;
    // console.log(three);
    // let four = JSON.parse(localStorage.symbolFour);
    // four = four.data;
    // console.log(four);
    // let five = JSON.parse(localStorage.symbolFive);
    // five = five.data;
    // console.log(five);
    // let six = JSON.parse(localStorage.symbolSix);
    // six = six.data;
    // console.log(six);

    // const TotalSymbols = Array(...one, ...two, ...three, ...four, ...five, ...six);
    // console.log(TotalSymbols);

    // this.apiService.post('http://localhost:8000/api/symbols', {"title":"symbols", "keys" : TotalSymbols}).subscribe(response=>{
    //   console.log(response);
    // })

    //=========================== End Of Get And Store Symbols =======================//


    // Set A function to load page
    // setTimeout(() => {
    //   this.isPageLoaded = true
    // }, 30000);


    // setTimeout(() => {
    //   this.firstLoading = true
    // }, 3000);






    // Get Symbols To Show It
    if(localStorage.symbols){
      this.symbols = JSON.parse(localStorage.symbols);
      this.someSymbols = this.symbols.splice(0, 5000);
      this.isPageLoaded = true;
    }else{
      this.apiService.get('http://localhost:8000/api/symbols').subscribe(response=>{
        this.symbols = response;
        this.symbols = this.symbols.keys;
        this.someSymbols = this.symbols.splice(0, 5000);
        localStorage.symbols = JSON.stringify(this.symbols);
        this.isPageLoaded = true;
      })
    }



    // Test symbols
    // this.apiService.get(`https://public-api.quickfs.net/v1/data/all-data/PHIG:US?api_key=4ed0f30c148834139f4bb3c4421341690f3d3c07`).subscribe(response=>{
    //   console.log(response);
    // })



    // this.apiService.get(`http://localhost:8000/api/keyStatistics/all`
    // ,{ headers: { 'Authorization': this.userService.getToken() } }
    // ).subscribe(res => {
    //   this.responseData = res;
    //   this.names = this.responseData.names;
    //   this.symbols = this.responseData.symbols;
    //   this.isPageLoaded = true;
    // })
  }

  splicedArray(arr: any) {
    return arr.splice(-11);
  }

  //=====================> Request Service To Get Data. =========================//

  callDataBase(searchKey: string) {
    if(searchKey.includes(':')){
      searchKey = searchKey.substring(0, searchKey.lastIndexOf(':'));
    };
    return this.apiService.get(`http://localhost:8000/api/keyStatistics/${searchKey.toUpperCase()}`,
      { headers: { 'Authorization': this.userService.getToken() } }
    )
  }

  callApiAfterDataBase(searchKey: string) {

    return this.apiService.get(`https://public-api.quickfs.net/v1/data/all-data/${searchKey.toUpperCase()}?api_key=4ed0f30c148834139f4bb3c4421341690f3d3c07`,
      { headers: { 'Authorization': this.userService.getToken() } }
    )
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
    return this.apiService.post('http://localhost:8000/api/keyStatistics', this.requestService.data,
      { headers: { 'Authorization': this.userService.getToken() } }
    )
  }

  returnDataFromDataBase(res: any) {
    this.data = res;

    // Best Mode Requrirements
    this.name = this.data.name;
    this.symbol = this.data.symbol;
    this.PE = this.data.price_to_earnings.splice(-1)[0];
    this.PS = this.data.price_to_sales.splice(-1)[0];
    // this.operatingMargin = this.oparator('+', this.data.operating_margin);
    this.netIncomeMargin = this.oparator('+', this.data.net_income_margin);
    this.totalAssets = this.oparator('+', this.data.total_current_assets);
    this.totalLibilites = this.oparator('+', this.data.total_current_liabilities);
    this.roce = this.oparator('+', this.data.roce);
    this.flowPerShare = this.oparator('+', this.data.fcf_per_share);
    this.marketCap = this.oparator('+', this.data.market_cap);
    this.operating_income_per_share = this.oparator('+', this.data.operating_income_per_share);
    this.pretax_income_per_share = this.oparator('+', this.data.pretax_income_per_share);
    this.dividends_quarterly = this.oparator('+', this.data.dividends_quarterly);
    this.deptToEquity = this.oparator('+', this.data.debt_to_equity);
    this.deptToEquityFixed = (parseInt(this.deptToEquity)) / 100
    this.revenueRatio = (parseInt(this.pretax_income_per_share) - parseInt(this.operating_income_per_share))
    this.dividendsFixed = ((parseInt(this.dividends_quarterly) / 100)) + '%'
    this.total = (parseInt(this.totalAssets) / parseInt(this.totalLibilites)).toFixed(1)
    this.revenueGrowth = (this.data.revenue_growth).splice(-2)
    this.calculater = (((this.revenueGrowth[1] - this.revenueGrowth[0]) / this.revenueGrowth[0]) * 100).toFixed(0) + '%'
    this.roeMedian = ((this.data.roe_median) * 100).toFixed(0) + '%'
    this.roceFixed = (parseInt(this.roce).toFixed(0) + '%')
    this.flowPerShareFixed = (parseInt(this.flowPerShare).toFixed(0) + '%')
    this.marketCapFixed = ((parseInt(this.marketCap)) / 1000000).toFixed(0) + '$'
    this.industry = this.data.industry
    this.currency = this.data.currency

    // One Requirements
    if (!this.data) return;
    this.PE = this.data.price_to_earnings.splice(-1)[0];
    this.PB = this.data.price_to_book.splice(-1)[0];
    this.PS = this.data.price_to_sales.splice(-1)[0];
    this.enterprise_value_to_earnings = this.data.enterprise_value_to_earnings.splice(-1)[0];
    this.enterprise_value_to_sales = this.data.enterprise_value_to_sales.splice(-1)[0];
    this.ebitda_per_share = this.data.ebitda_per_share.splice(-1);
    this.enterprise_value_to_pretax_income = this.data.enterprise_value_to_pretax_income.splice(-1)[0];
    this.enterprise_value_to_fcf = this.data.enterprise_value_to_fcf.splice(-1);
    this.roa_median = this.data.roa_median;
    this.roe_median = this.data.roe_median;
    this.roic_median = this.data.roic_median;
    this.revenue_cagr_10 = this.data.revenue_cagr_10.splice(-1);
    this.total_assets_cagr_10 = this.data.total_assets_cagr_10.splice(-1);
    this.fcf_cagr_10 = this.data.fcf_cagr_10.splice(-1);
    this.eps_diluted_cagr_10 = this.data.eps_diluted_cagr_10.splice(-1);
    this.gross_margin_median = this.data.gross_margin_median;
    this.pretax_margin_median = this.data.pretax_margin_median;
    this.fcf_margin_median = this.data.fcf_margin_median;
    this.assets_to_equity_median = this.data.assets_to_equity_median;
    this.debt_to_equity_median = this.data.debt_to_equity_median;
    this.debt_to_assets_median = this.data.debt_to_assets_median;

    // Two Requirement
    if (!this.data) return;
    this.revenue = this.splicedArray(this.data.revenue);
    this.revenue_growth = this.splicedArray(this.data.revenue_growth);
    this.gross_profit = this.splicedArray(this.data.gross_profit);
    this.gross_margin = this.splicedArray(this.data.gross_margin);
    this.operating_income = this.splicedArray(this.data.operating_income);
    this.operating_margin = this.splicedArray(this.data.operating_margin);
    this.eps_diluted = this.splicedArray(this.data.eps_diluted)
    this.eps_diluted_growth = this.splicedArray(this.data.eps_diluted_growth);
    this.dividends_annual = this.splicedArray(this.data.dividends_annual);
    this.dividends_per_share_growth = this.splicedArray(this.data.dividends_per_share_growth)
    this.roa = this.splicedArray(this.data.roa);
    this.roe = this.splicedArray(this.data.roe);
    this.roic = this.splicedArray(this.data.roic);
    this.isResponseGet = true;
    this.loaderStarted = false;
    localStorage.responseData = JSON.stringify(res);
  }



  getData(e: any, searchKey: string) {
    this.loaderStarted = true;
    let id = Number(e.target.id);
    e.target.value = '';

    //first CAll
    this.callDataBase(searchKey).subscribe(res => {

      if (res == null) {
        //Second Call
        this.callApiAfterDataBase(searchKey).subscribe(res => {
          this.data = res;

          if (this.data.errors) {
            alert('Company Not Found');
            e.target.value = '';
            return;
          };

          //Third CAll
          this.storeDataFromApiToDataBase(this.data).subscribe(res => {
            this.returnDataFromDataBase(res);
            localStorage.latestSearchKey = searchKey;
          }, console.error);

        }, console.error);

      } else {
        this.returnDataFromDataBase(res);
        localStorage.latestSearchKey = searchKey;
      }

    }, console.error);
  }


}



