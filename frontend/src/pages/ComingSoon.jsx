
import React from 'react';

const ComingSoon = ({ title }) => {
    return (
        <div className="container-fluid p-4">
            <div className="card shadow-sm border-0">
                <div className="card-body text-center p-5">
                    <i className="bi bi-cone-striped display-1 text-warning mb-3"></i>
                    <h2 className="mb-3">{title || 'Em Breve'}</h2>
                    <p className="text-muted">
                        Esta seção ainda está em desenvolvimento. Volte em breve!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;
