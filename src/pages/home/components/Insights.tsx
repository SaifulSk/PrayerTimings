import React, { useEffect, useState } from 'react'

interface InsightsProps {
    type?: string
}

export default function Insights({type}: InsightsProps) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const today = new Date().toISOString().split('T')[0];
                const storageKey = `insight_data_${type || "Quran"}`;
                const cached = localStorage.getItem(storageKey);
                
                if (cached) {
                    const parsed = JSON.parse(cached);
                    if (parsed.date === today) {
                        setData(parsed.data);
                        setLoading(false);
                        return;
                    }
                }

                if (type === "Hadith") {
                    const hadithId = Math.floor(Math.random() * 7500) + 1;
                    const res = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-bukhari/${hadithId}.json`);
                    const json = await res.json();
                    const newData = {
                        text: json.hadiths[0].text,
                        reference: `${json.metadata.name}, Hadith ${json.hadiths[0].hadithnumber}`
                    };
                    setData(newData);
                    localStorage.setItem(storageKey, JSON.stringify({ date: today, data: newData }));
                } else {
                    const quranId = Math.floor(Math.random() * 6236) + 1;
                    const res = await fetch(`https://api.alquran.cloud/v1/ayah/${quranId}/editions/quran-uthmani,en.asad`);
                    const json = await res.json();
                    const newData = {
                        arabic: json.data[0].text,
                        text: json.data[1].text,
                        reference: `Surah ${json.data[1].surah.englishName}, Ayah ${json.data[1].numberInSurah}`
                    };
                    setData(newData);
                    localStorage.setItem(storageKey, JSON.stringify({ date: today, data: newData }));
                }
            } catch (err) {
                console.error(err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [type]);

    return (
        <div style={{ padding: '20px 10px', textAlign: "center", marginBottom: '15px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <h4 style={{ color: '#00a8cc', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>Daily {type || "Qur'an"} Insight</h4>
            {loading ? (
                <p className="text-white">Loading...</p>
            ) : error ? (
                <p className="text-white">Failed to load insight.</p>
            ) : (
                <div>
                    {data?.arabic && <p style={{ fontSize: '28px', marginBottom: '15px', direction: 'rtl', lineHeight: '1.8' }} className="text-white">{data.arabic}</p>}
                    <p style={{ fontSize: '18px', lineHeight: '1.6', fontStyle: 'italic' }} className="text-white">"{data?.text}"</p>
                    <p style={{ marginTop: '15px', fontWeight: 'bold', color: '#ffb400' }}>- {data?.reference}</p>
                </div>
            )}
        </div>
    )
}