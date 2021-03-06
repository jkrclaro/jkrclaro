from datetime import datetime

from django.db import models
from django.db.utils import IntegrityError


class JohnHopkinsCaseManager(models.Manager):
    def upsert_case(self, date, country, cases, deaths, recoveries):
        try:
            case = self.create(
                date=date,
                country=country,
                cases=cases,
                deaths=deaths,
                recoveries=recoveries
            )
            return case
        except IntegrityError:
            pass


class HSECaseManager(models.Manager):
    def upsert_case(self, **kwargs):
        try:
            item = self.get(date=kwargs['date'])
            for key, value in kwargs.items():
                setattr(item, key, value)
            item.save()
        except self.model.DoesNotExist:
            self.create(**kwargs)


class HSECountyManager(models.Manager):
    def upsert_county(self, **kwargs):
        try:
            item = self.get(countyname=kwargs['countyname'])
            for key, value in kwargs.items():
                setattr(item, key, value)
            item.save()
        except self.model.DoesNotExist:
            self.create(**kwargs)


class HSESwabManager(models.Manager):
    def upsert_swab(self, **kwargs):
        try:
            item = self.get(date_hpsc=kwargs['date_hpsc'])
            for key, value in kwargs.items():
                setattr(item, key, value)
            item.save()
        except self.model.DoesNotExist:
            self.create(**kwargs)
