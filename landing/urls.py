# coding=utf-8
from django.conf.urls import patterns, url
from django.views.generic import TemplateView
from .views import LandingView

__author__ = 'alexy'


urlpatterns = patterns(
    'landing.views',
    url(r'^$', TemplateView.as_view(template_name='landing/index.html'), name='index'),
    url(r'^afisha/$', TemplateView.as_view(template_name='landing/afisha.html'), name='afisha'),
    url(r'^account/$', TemplateView.as_view(template_name='landing/account.html'), name='account'),
    url(r'^gallery/$', TemplateView.as_view(template_name='landing/gallery.html'), name='gallery'),
    url(r'^interior/$', TemplateView.as_view(template_name='landing/interior.html'), name='interior'),
    url(r'^menu/$', TemplateView.as_view(template_name='landing/menu.html'), name='menu'),
    url(r'^robots\.txt', 'get_robots_txt', name='robots'),
    url(r'^sitemap\.xml', 'get_sitemap_xml', name='sitemap'),
)