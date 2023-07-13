import React from 'react';

class FlavanoidsStatistics extends React.Component {
    calculateClassWiseMean(data) {
        const classWiseFlavanoids = {};

        data.forEach((item) => {
            const alcoholClass = item.Alcohol;
            const flavanoids = item.Flavanoids;

            if (!classWiseFlavanoids[alcoholClass]) {
                classWiseFlavanoids[alcoholClass] = [];
            }

            classWiseFlavanoids[alcoholClass].push(flavanoids);
        });

        const classWiseMean = {};
        for (const alcoholClass in classWiseFlavanoids) {
            const flavanoidsList = classWiseFlavanoids[alcoholClass];
            const sum = flavanoidsList.reduce((acc, val) => acc + val, 0);
            const meanValue = sum / flavanoidsList.length;
            classWiseMean[alcoholClass] = meanValue;
        }

        return classWiseMean;
    }
    fixedPointVal(value) {
        return parseFloat(value.toFixed(3));
    }
    calculateClassWiseMedian(data) {
        const classWiseFlavanoids = {};

        data.forEach((item) => {
            const alcoholClass = item.Alcohol;
            const flavanoids = item.Flavanoids;

            if (!classWiseFlavanoids[alcoholClass]) {
                classWiseFlavanoids[alcoholClass] = [];
            }

            classWiseFlavanoids[alcoholClass].push(flavanoids);
        });

        const classWiseMedian = {};
        for (const alcoholClass in classWiseFlavanoids) {
            const flavanoidsList = classWiseFlavanoids[alcoholClass];
            const sortedFlavanoids = flavanoidsList.sort((a, b) => a - b);
            const midIndex = Math.floor(sortedFlavanoids.length / 2);
            const medianValue =
                sortedFlavanoids.length % 2 === 0
                    ? (sortedFlavanoids[midIndex - 1] + sortedFlavanoids[midIndex]) / 2
                    : sortedFlavanoids[midIndex];
            classWiseMedian[alcoholClass] = medianValue;
        }

        return classWiseMedian;
    }

    calculateClassWiseMode(data) {
        const classWiseFlavanoids = {};

        data.forEach((item) => {
            const alcoholClass = item.Alcohol;
            const flavanoids = item.Flavanoids;

            if (!classWiseFlavanoids[alcoholClass]) {
                classWiseFlavanoids[alcoholClass] = [];
            }

            classWiseFlavanoids[alcoholClass].push(flavanoids);
        });

        const classWiseMode = {};
        for (const alcoholClass in classWiseFlavanoids) {
            const flavanoidsList = classWiseFlavanoids[alcoholClass];
            const countMap = {};
            let maxCount = 0;
            let modeValue;

            flavanoidsList.forEach((value) => {
                countMap[value] = (countMap[value] || 0) + 1;

                if (countMap[value] > maxCount) {
                    maxCount = countMap[value];
                    modeValue = value;
                }
            });

            classWiseMode[alcoholClass] = modeValue;
        }

        return classWiseMode;
    }

    render() {
        const data = [
            {
                "Alcohol": 1,
                "Malic Acid": 14.23,
                "Ash": 1.71,
                "Alcalinity of ash": 2.43,
                "Magnesium": 15.6,
                "Total phenols": 127,
                "Flavanoids": 2.8,
                "Nonflavanoid phenols": 3.06,
                "Proanthocyanins": ".28",
                "Color intensity": 2.29,
                "Hue": 5.64,
                "OD280/OD315 of diluted wines": 1.04,
                "Unknown": 3.92
            },
            {
                "Alcohol": 1,
                "Malic Acid": 13.2,
                "Ash": 1.78,
                "Alcalinity of ash": 2.14,
                "Magnesium": 11.2,
                "Total phenols": 100,
                "Flavanoids": 2.65,
                "Nonflavanoid phenols": 2.76,
                "Proanthocyanins": ".26",
                "Color intensity": 1.28,
                "Hue": 4.38,
                "OD280/OD315 of diluted wines": 1.05,
                "Unknown": 3.4
            },
            {
                "Alcohol": 1,
                "Malic Acid": 13.16,
                "Ash": 2.36,
                "Alcalinity of ash": 2.67,
                "Magnesium": 18.6,
                "Total phenols": 101,
                "Flavanoids": 2.8,
                "Nonflavanoid phenols": 3.24,
                "Proanthocyanins": ".3",
                "Color intensity": 2.81,
                "Hue": 5.68,
                "OD280/OD315 of diluted wines": 1.03,
                "Unknown": 3.17
            },
            {
                "Alcohol": 1,
                "Malic Acid": 14.37,
                "Ash": 1.95,
                "Alcalinity of ash": 2.5,
                "Magnesium": 16.8,
                "Total phenols": 113,
                "Flavanoids": 3.85,
                "Nonflavanoid phenols": 3.49,
                "Proanthocyanins": ".24",
                "Color intensity": 2.18,
                "Hue": 7.8,
                "OD280/OD315 of diluted wines": ".86",
                "Unknown": 3.45
            },
            {
                "Alcohol": 1,
                "Malic Acid": 13.24,
                "Ash": 2.59,
                "Alcalinity of ash": 2.87,
                "Magnesium": 21,
                "Total phenols": 118,
                "Flavanoids": 2.8,
                "Nonflavanoid phenols": 2.69,
                "Proanthocyanins": ".39",
                "Color intensity": 1.82,
                "Hue": 4.32,
                "OD280/OD315 of diluted wines": 1.04,
                "Unknown": 2.93
            },
            {
                "Alcohol": 1,
                "Malic Acid": 14.2,
                "Ash": 1.76,
                "Alcalinity of ash": 2.45,
                "Magnesium": 15.2,
                "Total phenols": 112,
                "Flavanoids": 3.27,
                "Nonflavanoid phenols": 3.39,
                "Proanthocyanins": ".34",
                "Color intensity": 1.97,
                "Hue": 6.75,
                "OD280/OD315 of diluted wines": 1.05,
                "Unknown": 2.85
            },
            {
                "Alcohol": 1,
                "Malic Acid": 13.29,
                "Ash": 1.97,
                "Alcalinity of ash": 2.68,
                "Magnesium": 16.8,
                "Total phenols": 102,
                "Flavanoids": 3,
                "Nonflavanoid phenols": 3.23,
                "Proanthocyanins": ".31",
                "Color intensity": 1.66,
                "Hue": 6,
                "OD280/OD315 of diluted wines": 1.07,
                "Unknown": 2.84
            },
            {
                "Alcohol": 2,
                "Malic Acid": 12.37,
                "Ash": ".94",
                "Alcalinity of ash": 1.36,
                "Magnesium": 10.6,
                "Total phenols": 88,
                "Flavanoids": 1.98,
                "Nonflavanoid phenols": ".57",
                "Proanthocyanins": ".28",
                "Color intensity": ".42",
                "Hue": 1.95,
                "OD280/OD315 of diluted wines": 1.05,
                "Unknown": 1.82
            },
            {
                "Alcohol": 2,
                "Malic Acid": 12.33,
                "Ash": 1.1,
                "Alcalinity of ash": 2.28,
                "Magnesium": 16,
                "Total phenols": 101,
                "Flavanoids": 2.05,
                "Nonflavanoid phenols": 1.09,
                "Proanthocyanins": ".63",
                "Color intensity": ".41",
                "Hue": 3.27,
                "OD280/OD315 of diluted wines": 1.25,
                "Unknown": 1.67
            },
            {
                "Alcohol": 2,
                "Malic Acid": 12.64,
                "Ash": 1.36,
                "Alcalinity of ash": 2.02,
                "Magnesium": 16.8,
                "Total phenols": 100,
                "Flavanoids": 2.02,
                "Nonflavanoid phenols": 1.41,
                "Proanthocyanins": ".53",
                "Color intensity": ".62",
                "Hue": 5.75,
                "OD280/OD315 of diluted wines": ".98",
                "Unknown": 1.59
            },
            {
                "Alcohol": 2,
                "Malic Acid": 13.67,
                "Ash": 1.25,
                "Alcalinity of ash": 1.92,
                "Magnesium": 18,
                "Total phenols": 94,
                "Flavanoids": 2.1,
                "Nonflavanoid phenols": 1.79,
                "Proanthocyanins": ".32",
                "Color intensity": ".73",
                "Hue": 3.8,
                "OD280/OD315 of diluted wines": 1.23,
                "Unknown": 2.46
            },
            {
                "Alcohol": 2,
                "Malic Acid": 12.37,
                "Ash": 1.13,
                "Alcalinity of ash": 2.16,
                "Magnesium": 19,
                "Total phenols": 87,
                "Flavanoids": 3.5,
                "Nonflavanoid phenols": 3.1,
                "Proanthocyanins": ".19",
                "Color intensity": 1.87,
                "Hue": 4.45,
                "OD280/OD315 of diluted wines": 1.22,
                "Unknown": 2.87
            },
            {
                "Alcohol": 2,
                "Malic Acid": 12.17,
                "Ash": 1.45,
                "Alcalinity of ash": 2.53,
                "Magnesium": 19,
                "Total phenols": 104,
                "Flavanoids": 1.89,
                "Nonflavanoid phenols": 1.75,
                "Proanthocyanins": ".45",
                "Color intensity": 1.03,
                "Hue": 2.95,
                "OD280/OD315 of diluted wines": 1.45,
                "Unknown": 2.23
            },
            {
                "Alcohol": 2,
                "Malic Acid": 12.37,
                "Ash": 1.21,
                "Alcalinity of ash": 2.56,
                "Magnesium": 18.1,
                "Total phenols": 98,
                "Flavanoids": 2.42,
                "Nonflavanoid phenols": 2.65,
                "Proanthocyanins": ".37",
                "Color intensity": 2.08,
                "Hue": 4.6,
                "OD280/OD315 of diluted wines": 1.19,
                "Unknown": 2.3
            },
            {
                "Alcohol": 3,
                "Malic Acid": 12.86,
                "Ash": 1.35,
                "Alcalinity of ash": 2.32,
                "Magnesium": 18,
                "Total phenols": 122,
                "Flavanoids": 1.51,
                "Nonflavanoid phenols": 1.25,
                "Proanthocyanins": ".21",
                "Color intensity": ".94",
                "Hue": 4.1,
                "OD280/OD315 of diluted wines": ".76",
                "Unknown": 1.29
            },
            {
                "Alcohol": 3,
                "Malic Acid": 12.88,
                "Ash": 2.99,
                "Alcalinity of ash": 2.4,
                "Magnesium": 20,
                "Total phenols": 104,
                "Flavanoids": 1.3,
                "Nonflavanoid phenols": 1.22,
                "Proanthocyanins": ".24",
                "Color intensity": ".83",
                "Hue": 5.4,
                "OD280/OD315 of diluted wines": ".74",
                "Unknown": 1.42
            },
            {
                "Alcohol": 3,
                "Malic Acid": 12.81,
                "Ash": 2.31,
                "Alcalinity of ash": 2.4,
                "Magnesium": 24,
                "Total phenols": 98,
                "Flavanoids": 1.15,
                "Nonflavanoid phenols": 1.09,
                "Proanthocyanins": ".27",
                "Color intensity": ".83",
                "Hue": 5.7,
                "OD280/OD315 of diluted wines": ".66",
                "Unknown": 1.36
            },
            {
                "Alcohol": 3,
                "Malic Acid": 12.7,
                "Ash": 3.55,
                "Alcalinity of ash": 2.36,
                "Magnesium": 21.5,
                "Total phenols": 106,
                "Flavanoids": 1.7,
                "Nonflavanoid phenols": 1.2,
                "Proanthocyanins": ".17",
                "Color intensity": ".84",
                "Hue": 5,
                "OD280/OD315 of diluted wines": ".78",
                "Unknown": 1.29
            },
            {
                "Alcohol": 3,
                "Malic Acid": 12.51,
                "Ash": 1.24,
                "Alcalinity of ash": 2.25,
                "Magnesium": 17.5,
                "Total phenols": 85,
                "Flavanoids": 2,
                "Nonflavanoid phenols": ".58",
                "Proanthocyanins": ".6",
                "Color intensity": 1.25,
                "Hue": 5.45,
                "OD280/OD315 of diluted wines": ".75",
                "Unknown": 1.51
            },
            {
                "Alcohol": 3,
                "Malic Acid": 12.6,
                "Ash": 2.46,
                "Alcalinity of ash": 2.2,
                "Magnesium": 18.5,
                "Total phenols": 94,
                "Flavanoids": 1.62,
                "Nonflavanoid phenols": ".66",
                "Proanthocyanins": ".63",
                "Color intensity": ".94",
                "Hue": 7.1,
                "OD280/OD315 of diluted wines": ".73",
                "Unknown": 1.58
            },
            {
                "Alcohol": 3,
                "Malic Acid": 12.25,
                "Ash": 4.72,
                "Alcalinity of ash": 2.54,
                "Magnesium": 21,
                "Total phenols": 89,
                "Flavanoids": 1.38,
                "Nonflavanoid phenols": ".47",
                "Proanthocyanins": ".53",
                "Color intensity": ".8",
                "Hue": 3.85,
                "OD280/OD315 of diluted wines": ".75",
                "Unknown": 1.27
            },
        ];

        const classWiseMean = this.calculateClassWiseMean(data);
        const classWiseMedian = this.calculateClassWiseMedian(data);
        const classWiseMode = this.calculateClassWiseMode(data);

        return (
            <div className='plavanoid'>
                <h1>Flavanoids</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Mesure</th>
                            <th>Mean</th>
                            <th>Median</th>
                            <th>Mode</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(classWiseMean).map((alcoholClass) => (
                            <tr key={alcoholClass}>
                                <td>{`class ${alcoholClass}`}</td>
                                <td>{this.fixedPointVal(classWiseMean[alcoholClass])}</td>
                                <td>{classWiseMedian[alcoholClass]}</td>
                                <td>{classWiseMode[alcoholClass]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br></br>
            </div>
        );
    }
}

export default FlavanoidsStatistics;
