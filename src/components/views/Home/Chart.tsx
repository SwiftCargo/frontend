import "chart.js/auto";
import { Suspense } from "react";
import { Line } from "react-chartjs-2";

interface Props {
    data: any;
}
export default function Chart(props: Props) {
    return (
        <Suspense fallback={'Yükleniyor...'}>
            <Line
                data={props.data}
                options={{
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }}
            />
        </Suspense>
    );
}