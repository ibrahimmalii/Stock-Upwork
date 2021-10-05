<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKeyStatisticsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('key_statistics', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description');
            $table->string('country');
            $table->string('symbol');
            $table->string('exchange');
            $table->string('industry');
            $table->string('sector');
            $table->string('qfs_symbol');
            $table->json('market_cap');
            $table->json('enterprise_value');
            $table->json('volume');
            $table->json('average_daily_volume');
            $table->json('volume_inc_dec');
            $table->json('pe_ratio');
            $table->json('ps_ratio');
            $table->json('total_revenue');
            $table->json('cogs');
            $table->json('gross_profit');
            $table->json('total_opex');
            $table->json('operating_income');
            $table->json('operating_margin');
            $table->json('pretax_income');
            $table->json('net_income');
            $table->json('net_income_margin');
            $table->json('total_current_assets');
            $table->json('total_current_liabilities');
            $table->json('total_assets');
            $table->json('total_liabilities');
            $table->json('revenue_growth');
            $table->json('fcf_margin');
            $table->json('roe');
            $table->json('roa');
            $table->json('roic');
            $table->json('roce');
            $table->json('rotce');
            $table->json('dividends_per_share_cagr_10');
            $table->json('payout_ratio');
            $table->json('debt_to_equity');
            $table->json('debt_to_assets');
            $table->json('equity_to_assets');
            $table->json('assets_to_equity');
            $table->json('revenue_per_share');
            $table->json('ebitda_per_share');
            $table->json('operating_income_per_share');
            $table->json('pretax_income_per_share');
            $table->json('fcf_per_share');
            $table->json('book_value_per_share');
            $table->json('shares_eop_growth');
            $table->json('net_income_growth');
            $table->json('gross_profit_growth');
            $table->json('fcf_growth');
            $table->json('ebitda_growth');
            $table->json('operating_income_growth');
            $table->json('total_assets_growth');
            $table->json('total_equity_growth');
            $table->json('cfo_growth');
            $table->json('revenue_cagr_10');
            $table->json('eps_diluted_cagr_10');
            $table->json('total_assets_cagr_10');
            $table->json('total_equity_cagr_10');
            $table->json('fcf_cagr_10');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('key_statistics');
    }
}
