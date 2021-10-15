<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KeyStatistics extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'country',
        'symbol',
        'exchange',
        'industry',
        'sector',
        'qfs_symbol',
        'price',
        'market_cap',
        'enterprise_value',
        'volume',
        'average_daily_volume',
        'volume_inc_dec',
        'pe_ratio',
        'ps_ratio',
        'pb_ratio',
        'cogs',
        'gross_profit',
        'total_opex',
        'operating_income',
        'operating_margin',
        'pretax_income',
        'net_income',
        'net_income_margin',
        'total_current_assets',
        'total_current_liabilities',
        'total_assets',
        'total_liabilities',
        'revenue_growth',
        'fcf_margin',
        'roe',
        'roa',
        'roic',
        'roce',
        'rotce',
        'dividends_per_share_cagr_10',
        'payout_ratio',
        'debt_to_equity',
        'debt_to_assets',
        'equity_to_assets',
        'assets_to_equity',
        'revenue_per_share',
        'ebitda_per_share',
        'operating_income_per_share',
        'pretax_income_per_share',
        'fcf_per_share',
        'book_value_per_share',
        'shares_eop_growth',
        'net_income_growth',
        'gross_profit_growth',
        'fcf_growth',
        'ebitda_growth',
        'operating_income_growth',
        'total_assets_growth',
        'total_equity_growth',
        'cfo_growth',
        'revenue_cagr_10',
        'eps_diluted_cagr_10',
        'total_assets_cagr_10',
        'total_equity_cagr_10',
        'fcf_cagr_10',
        'price_to_earnings',
        'price_to_sales',
        'dividends_quarterly',
        'dividends_annual',
        'roe_median',
        'price_to_book',
        'enterprise_value_to_earnings',
        'enterprise_value_to_sales',
        'enterprise_value_to_pretax_income',
        'enterprise_value_to_fcf',
        'roa_median',
        'roic_median',
        'gross_margin_median',
        'pretax_margin_median',
        'fcf_margin_median',
        'assets_to_equity_median',
        'debt_to_equity_median',
        'debt_to_assets_median',
        'revenue',
        'gross_margin',
        'eps_diluted',
        'eps_diluted_growth',
        'dividends_per_share_growth',
    ];

    protected $casts = [
        'market_cap' => 'array',
        'enterprise_value' => 'array',
        'gross_profit' => 'array',
        'total_opex' => 'array',
        'operating_income' => 'array',
        'operating_margin' => 'array',
        'pretax_income' => 'array',
        'net_income' => 'array',
        'net_income_margin' => 'array',
        'total_current_assets' => 'array',
        'total_current_liabilities' => 'array',
        'total_assets' => 'array',
        'total_liabilities' => 'array',
        'revenue_growth' => 'array',
        'fcf_margin' => 'array',
        'roe' => 'array',
        'roa' => 'array',
        'roic' => 'array',
        'roce' => 'array',
        'rotce' => 'array',
        'dividends_per_share_cagr_10' => 'array',
        'payout_ratio' => 'array',
        'debt_to_equity' => 'array',
        'debt_to_assets' => 'array',
        'equity_to_assets' => 'array',
        'assets_to_equity' => 'array',
        'revenue_per_share' => 'array',
        'ebitda_per_share' => 'array',
        'operating_income_per_share' => 'array',
        'pretax_income_per_share' => 'array',
        'fcf_per_share' => 'array',
        'book_value_per_share' => 'array',
        'shares_eop_growth' => 'array',
        'net_income_growth' => 'array',
        'gross_profit_growth' => 'array',
        'fcf_growth' => 'array',
        'ebitda_growth' => 'array',
        'operating_income_growth' => 'array',
        'total_assets_growth' => 'array',
        'total_equity_growth' => 'array',
        'cfo_growth' => 'array',
        'revenue_cagr_10' => 'array',
        'eps_diluted_cagr_10' => 'array',
        'total_assets_cagr_10' => 'array',
        'total_equity_cagr_10' => 'array',
        'fcf_cagr_10' => 'array',
        'price_to_earnings' => 'array',
        'price_to_sales' => 'array',
        'dividends_quarterly' => 'array',
        'dividends_annual' => 'array',
        'roe_median' => 'array',
        'price_to_book' => 'array',
        'enterprise_value_to_earnings' => 'array',
        'enterprise_value_to_sales' => 'array',
        'enterprise_value_to_pretax_income' => 'array',
        'enterprise_value_to_fcf' => 'array',
        'roa_median' => 'array',
        'roic_median' => 'array',
        'gross_margin_median' => 'array',
        'pretax_margin_median' => 'array',
        'fcf_margin_median' => 'array',
        'assets_to_equity_median' => 'array',
        'debt_to_equity_median' => 'array',
        'debt_to_assets_median' => 'array',
        'revenue' => 'array',
        'gross_margin' => 'array',
        'eps_diluted' => 'array',
        'eps_diluted_growth' => 'array',
        'dividends_per_share_growth' => 'array',
    ];
}
