<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    /**
     * Constructor for the controller.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware(['auth', 'verified', 'status_check'])->except(['redirectToDashboard']);
        \cs_set('theme', [
            'title' => 'Dashboard',
            'back' => \back_url(),
            'breadcrumb' => [
                [
                    'name' => 'Dashboard',
                    'link' => false,
                ],

            ],
            'rprefix' => 'admin.dashboard',
        ]);
    }

    public function index()
    {
        $data = [];

        return view('dashboard', []);
    }

    public function redirectToDashboard()
    {
        return redirect()->route('admin.dashboard');
    }

    public function getLineChartData()
    {
        $endDate = Carbon::now();

        // Subtract 11 months from the current date to get the starting date for the last 12 months
        $startDate = $endDate->copy()->subMonths(11);

        // Initialize an empty array to store formatted data
        $data = [];

        // Query to retrieve monthly maintenance cost for the last 12 months
        $monthlyCosts = DB::table('vehicle_maintenances')
            ->select(DB::raw('YEAR(date) as year'), DB::raw('MONTH(date) as month'), DB::raw('SUM(total) as total_cost'))
            ->whereBetween('date', [$startDate->startOfMonth(), $endDate->endOfMonth()])
            ->groupBy(DB::raw('YEAR(date)'), DB::raw('MONTH(date)'))
            ->orderBy('year')
            ->orderBy('month')
            ->get();

        // Iterate over each month of the last 12 months
        for ($i = 0; $i < 12; $i++) {
            // Initialize cost to 0 for each month
            $cost = 0;

            // Check if there's data available for the current month
            $currentMonthData = $monthlyCosts->where('year', $endDate->year)->where('month', $endDate->month)->first();

            $cost = $currentMonthData->total_cost ?? 0;

            // Format the date and store the month and cost in the data array

            $data[] = [
                'label' => $endDate->format('M'),
                'value' => (int) $cost,
                // if even then #FF5733 else #000000
                'color' => $i % 2 == 0 ? '#FF5733' : '#000000',
            ];
            // Move to the previous month for the next iteration
            $endDate->subMonth();
        }
        // Reverse the data array to maintain chronological order
        $data = array_reverse($data);

        return $data;
    }

    public function getPieChartData()
    {
        // Get the current date and date 12 months ago
        $endDate = Carbon::now();
        $startDate = Carbon::now()->subMonths(12);

        // Initialize an array to store data
        $data = [];

        return $data;
    }

    public function getVennDiagramData()
    {
        $statues = [
            'pending' => [
                'name' => localize('Pending'),
                'value' => 0,
                'color' => '#dfd7d7',
            ],
            'approved' => [
                'name' => localize('Approved'),
                'value' => 0,
                'color' => '#17c653',
            ],
            'rejected' => [
                'name' => localize('Rejected'),
                'value' => 0,
                'color' => '#dc3545e0',
                // "sets" => [localize('Pending'),  localize('Approved')],
            ],
        ];

        $endDate = Carbon::now();
        $startDate = $endDate->copy()->subMonths(11);
        // Get last 12 months data for vehicle requisitions status in percentage
        $data = [];

        foreach ($data as $item) {
            $statues[$item->status]['value'] = $item->total;
        }

        return $statues;
    }

    public function getMultiAxisLineData()
    {
        $endDate = Carbon::now();

        // Subtract 11 months from the current date to get the starting date for the last 12 months
        $startDate = $endDate->copy()->subMonths(11);

        // Initialize an empty array to store formatted data
        $data = [];

        // Query to retrieve monthly maintenance cost for the last 12 months
        $monthlyRequisitions = [];
        // Iterate over each month of the last 12 months

        // Reverse the data array to maintain chronological order
        $data = array_reverse($data);

        return $data;
    }
}
