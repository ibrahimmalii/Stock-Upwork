<?php

namespace App\Http\Controllers;

use App\Models\KeyStatistics;
use Illuminate\Http\Request;
use Mockery\Undefined;

class KeyStatisticsController extends Controller
{
    public function create(Request $request){

        // Angular
        $data = KeyStatistics::create([
            'name'=> $request->name,
            'description'=> $request->description,
            'country' =>$request->country,
            'symbol'=> $request->symbol,
            'exchange' => $request->exchange,
            'industry'=> $request->industry,
            'sector' =>$request->sector,
            'qfs_symbol'=> $request->qfs_symbol,
            'market_cap' => $request->market_cap,
            'enterprise_value'=> $request->enterprise_value,
            'pe_ratio' => $request->pe_ratio,
            'ps_ratio' => $request->ps_ratio,
            'total_revenue' => $request->total_revenue,
            'cogs' => $request->cogs,
            'gross_profit' => $request->gross_profit,
            'total_opex' => $request->total_opex,
            'operating_margin' => $request->operating_margin,
            'operating_income' => $request->operating_income,
            'pretax_income' => $request->pretax_income,
            'net_income' => $request->net_income,
            'net_income_margin' => $request->net_income_margin,
            'total_current_assets' => $request->total_current_assets,
            'total_current_liabilities' => $request->total_current_liabilities,
            'total_assets' => $request->total_assets,
            'total_liabilities' => $request->total_liabilities,
            'revenue_growth' => $request->revenue_growth,
            'fcf_margin' => $request->fcf_margin,
            'roe' => $request->roe,
            'roa' => $request->roa,
            'roic' => $request->roic,
            'roce' => $request->roce,
            'rotce' => $request->rotce,
            'dividends_per_share_cagr_10' => $request->dividends_per_share_cagr_10,
            'payout_ratio' => $request->payout_ratio,
            'debt_to_equity' => $request->debt_to_equity,
            'debt_to_assets' => $request->debt_to_assets,
            'equity_to_assets' => $request->equity_to_assets,
            'assets_to_equity' => $request->assets_to_equity,
            'revenue_per_share' => $request->revenue_per_share,
            'ebitda_per_share' => $request->ebitda_per_share,
            'operating_income_per_share' => $request->operating_income_per_share,
            'pretax_income_per_share' => $request->pretax_income_per_share,
            'fcf_per_share' => $request->fcf_per_share,
            'book_value_per_share' => $request->book_value_per_share,
            'shares_eop_growth' => $request->shares_eop_growth,
            'net_income_growth' => $request->net_income_growth,
            'gross_profit_growth' => $request->gross_profit_growth,
            'fcf_growth' => $request->fcf_growth,
            'ebitda_growth' => $request->ebitda_growth,
            'operating_income_growth' => $request->operating_income_growth,
            'total_assets_growth' => $request->total_assets_growth,
            'total_equity_growth' => $request->total_equity_growth,
            'cfo_growth' => $request->cfo_growth,
            'revenue_cagr_10' => $request->revenue_cagr_10,
            'eps_diluted_cagr_10' => $request->eps_diluted_cagr_10,
            'total_assets_cagr_10' => $request->total_assets_cagr_10,
            'total_equity_cagr_10' => $request->total_equity_cagr_10,
            'fcf_cagr_10' => $request->fcf_cagr_10,
            'price_to_earnings' => $request->price_to_earnings,
            'price_to_sales' => $request->price_to_sales,
            'dividends' => $request->dividends,
            'roe_median' => $request->roe_median,

            'price_to_book' => $request->price_to_book,
            'enterprise_value_to_earnings' => $request-> enterprise_value_to_earnings,
            'enterprise_value_to_sales' => $request->enterprise_value_to_sales,
            'enterprise_value_to_pretax_income' => $request->enterprise_value_to_pretax_income ,
            'enterprise_value_to_fcf' => $request-> enterprise_value_to_fcf,
            'roa_median' => $request-> roa_median,
            'roic_median' => $request-> roic_median,
            'gross_margin_median' => $request-> gross_margin_median,
            'pretax_margin_median' => $request-> pretax_margin_median,
            'fcf_margin_median' => $request-> fcf_margin_median,
            'assets_to_equity_median' => $request-> assets_to_equity_median,
            'debt_to_equity_median' => $request-> debt_to_equity_median,
            'debt_to_assets_median' => $request-> debt_to_assets_median,
            'revenue' => $request-> revenue,
            'gross_margin' => $request-> gross_margin,
            'eps_diluted' => $request-> eps_diluted,
            'eps_diluted_growth' => $request-> eps_diluted_growth,
            'dividends_per_share_growth' => $request-> dividends_per_share_growth
        ]);

        return $data;
    }

    public function index(){
        $data = KeyStatistics::get();

        return $data;
    }

    public function show($symbol){
        $data = '';

        $company = KeyStatistics::where('symbol', $symbol)->get();

        // dd(count($company));
        if(count($company) == 0){
            return $data = 'null';
        };

        $data = $company[0];
        return $data;

    }


}
