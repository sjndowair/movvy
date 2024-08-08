import { Children, ReactNode, useEffect, useState } from "react";

interface 캐러셀인터페이스 {
    totalLength: number;
    viewCount: number;
    offset?: number;
    children?: JSX.Element | ReactNode;
}

const 캐러셀 = ({
    totalLength,
    offset = totalLength,
    viewCount,
    children,
}: 캐러셀인터페이스) => {
    const [prevIdx, setPrevIdx] = useState(-offset);
    const [currIdx, setCurrIdx] = useState(0);
    const [nextIdx, setNextIdx] = useState(offset);

    const onClickPrev = () => {
        setCurrIdx((cur) => Math.max(cur - offset, 0));
    };

    const onClickNexts = () => {
        const limit = totalLength - 1;
        const nextIdx = Math.min(currIdx + offset, limit - offset);

        /* 인터랙션 애니메이션 트리거 => nextIdx */
        /* 3000ms */

        setTimeout(() => {
            setCurrIdx(nextIdx);
        }, 3000);
    };

    useEffect(() => {
        /* 인터랙션 애니메이션 트리거 */
    }, [currIdx]);

    return <div>{children}</div>;
};

const 캐러셀바깥컴포넌트 = () => {
    const [data, setData] = useState<any[]>([]);

    return (
        <캐러셀 totalLength={data.length} viewCount={5} offset={5}>
            {data.map((v) => (
                <카드 데이터={v} key={v.id} />
            ))}
        </캐러셀>
    );
};
