import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import React from 'react';




const Chart = ({todos}) => {
    const completedTodos = todos.filter(todo => {
        return todo.completed === true;
    });

    const incompleteTodos = todos.filter(todo => {
        return todo.completed === false;
    });

    const myDataSource = {

        "chart": {
            "caption": "Your Todo Ratio",
            "subcaption": "",
            "startingangle": "120",
            "showlabels": "0",
            "showlegend": "1",
            "enablemultislicing": "0",
            "slicingdistance": "15",
            "showpercentvalues": "1",
            "showpercentintooltip": "0",
            "plottooltext": "$label Total: $datavalue",
            "theme": "ocean"
        },
        "data": [
            {
                "label": "Complete",
                "value": `${completedTodos.length}`,
                "color": "#00FF00"
            },
            {
                "label": "Incomplete",
                "value": `${incompleteTodos.length}`,
                "color": "FF0000"
            }
        ]
    };

    const chartConfigs = {
        type: 'pie3d',
        width: 600,
        height: 400,
        dataFormat: 'json',
        dataSource: myDataSource,
    };

    return (
        <div className="container is-centered">
            <ReactFC {...chartConfigs}/>
        </div>

    );
}

Charts(FusionCharts);



export default Chart;