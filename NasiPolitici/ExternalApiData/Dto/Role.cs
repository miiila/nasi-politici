﻿using System;

namespace HlidacStatu.NasiPolitici.ExternalApiData.Dto
{
    public sealed class Role
    {
        public string Name { get; set; }
        public string Organization { get; set; }

        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }
    }
}